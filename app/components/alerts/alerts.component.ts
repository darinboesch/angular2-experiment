import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Alert } from './Alert';
import { AlertsService } from './alerts.service';

@Component({
    selector: 'ifs-alerts',
    templateUrl: 'app/components/alerts/alerts.component.html',
    directives: [CORE_DIRECTIVES]
})

export class AlertsComponent implements OnInit {
    alerts: Alert[] = [];
    
    constructor(
      public alertsService: AlertsService
    ) {
    }
    
    ngOnInit() {
      this.alertsService.alerts
        .subscribe( (alerts: Alert[]) => {
          this.alerts = alerts;
        });
    }
    
    closeAlert(id: string) {
       this.alertsService.removeAlert(id); 
    }
}
