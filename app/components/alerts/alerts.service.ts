import {Injectable} from 'angular2/core';
import {Subject, Observable} from 'rxjs/Rx';
import {Alert} from './alert';

let initialAlerts: Alert[] = [];

interface IAlertsOperation extends Function {
  (messages: Alert[]): Alert[];
}

@Injectable()
export class AlertsService {
  // data management streams
  alerts: Observable<Alert[]>;
  newAlerts: Subject<Alert> = new Subject<Alert>();
  updates: Subject<any> = new Subject<any>();

  // action streams
  create: Subject<Alert> = new Subject<Alert>();
  remove: Subject<string> = new Subject<string>();
  clear: Subject<any> = new Subject<any>();

  constructor() {
    this.alerts = this.updates
      .scan((alerts: Alert[], operation: IAlertsOperation) => {
          return operation(alerts);
        },
        initialAlerts)
      .publishReplay(1)
      .refCount();

    this.create
      .map(function(alert: Alert): IAlertsOperation {
        return (alerts: Alert[]) => {
          return alerts.concat(alert);
        };
      })
      .subscribe(this.updates);

    this.newAlerts
      .subscribe(this.create);
    
    this.remove
      .map(function(id: string): IAlertsOperation {
        return (alerts: Alert[]) => {
          return alerts.filter((alert: Alert) => {
            return (alert.id !== id)
          });
        };
      })
      .subscribe(this.updates);
    
    this.clear
      .map(function(): IAlertsOperation {
        return () => {
          return initialAlerts;
        };
      })
      .subscribe(this.updates);
  }

  // an imperative function call to this action stream
  addAlert(type: string, msg: string): void {
    this.newAlerts.next(new Alert({type: type, msg: msg}));
  }

  clearAlerts(): void {
    this.clear.next('clear');
  }
  
  removeAlert(id: string): void {
    this.remove.next(id);
  }
}
