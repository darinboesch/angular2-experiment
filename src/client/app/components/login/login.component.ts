import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { FormBuilder, Validators, ControlGroup, NgIf } from 'angular2/common';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Authentication } from '../../common/authentication';
import { AlertsService } from '../alerts/alerts.service';

@Component({
    selector: 'dlb-login',
    templateUrl: 'app/components/login/login.component.html',
    directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES, NgIf]
})
export class LoginComponent {
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

    onSubmit(value: any) {
        this._alertsService.clearAlerts();

        this.auth.login(value.username, value.password)
            .subscribe(
                (token: any) => {
                    this.router.navigate(['Home']);
                },
                () => {
                  this._alertsService.addAlert('danger', 'Unauthorized credentials.');
                }
            );
    }
}
