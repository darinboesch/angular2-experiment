import {Component, ChangeDetectionStrategy, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {AlertsService} from './alerts.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'dlb-alerts',
    templateUrl: 'app/components/alerts/alerts.component.html',
    directives: [CORE_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AlertsComponent implements OnInit {
    alerts: Observable<any>;

    constructor(
      private _alertsService: AlertsService
    ) {
        //this.alerts = _alertsService.alerts;
        //this.alerts
        //  .subscribe(
        //    alerts => { console.log(alerts.length > 0); }
        //  );
    }

    ngOnInit() {
        this.alerts = this._alertsService.alerts;
    }

    closeAlert(id: string) {
       this._alertsService.removeAlert(id);
    }
}
