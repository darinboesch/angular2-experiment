import {Component, ChangeDetectionStrategy} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { AlertsService } from './alerts.service';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'ifs-alerts',
    templateUrl: 'app/components/alerts/alerts.component.html',
    directives: [CORE_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlertsComponent {
    alerts: Observable<any>;
    
    constructor(
      private _alertsService: AlertsService
    ) {
        this.alerts = _alertsService.alerts;
    }
    
    closeAlert(id: string) {
       this._alertsService.removeAlert(id);
    }
}
