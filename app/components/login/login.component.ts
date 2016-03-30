
import { Component, OnInit } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { FormBuilder, Validators, ControlGroup, NgIf } from 'angular2/common';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { HTTP_BINDINGS } from 'angular2/http';
import { Authentication } from '../../common/authentication';
import { AlertsService } from '../alerts/alerts.service';
import { Alert } from './Alert';

@Component({
    selector: 'ifs-login',
    providers: [
        HTTP_BINDINGS,
        Authentication
    ],
    templateUrl: 'app/components/login/login.component.html',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, NgIf]
})
export class LoginComponent implements OnInit {
    form: ControlGroup;
    
    constructor(
        public router: Router,
        public auth: Authentication,
        private _builder: FormBuilder,
        private _alertsService: AlertsService
    ) {
        this.form = _builder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
      this._alertsService.alerts
        .subscribe( (alerts: Alert[]) => {
          console.log(alerts);
          //this.alerts = alerts;
        });
    }
    onSubmit(value: any) {
        this._alertsService.clearAlerts();
      
        this.auth.login(value.username, value.password)
            .subscribe(
                (token: any) => {
                    this.router.navigate(['Home']);
                },
                () => {
                  this._alertsService.addAlert('danger', 'Unauthorized credentials.');
                  //this._alertsService.addAlert('danger', 'Another Unauthorized credentials.');
                }
            );
    }
}
