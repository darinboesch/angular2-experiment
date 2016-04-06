"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var common_1 = require('angular2/common');
var common_2 = require('angular2/common');
var LoginComponent = (function () {
    function LoginComponent(router, http, _builder, _alertsService) {
        this.router = router;
        this.http = http;
        this._builder = _builder;
        this._alertsService = _alertsService;
        this.form = _builder.group({
            username: ['', common_1.Validators.required],
            password: ['', common_1.Validators.required]
        });
    }
    LoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this._alertsService.clearAlerts();
        this.http.authenticate(value.username, value.password)
            .subscribe(function (token) {
            _this.router.navigate(['Home']);
        }, function () {
            _this._alertsService.addAlert('danger', 'Unauthorized credentials.');
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ifs-login',
            templateUrl: 'app/components/login/login.component.html',
            directives: [router_1.RouterLink, common_2.CORE_DIRECTIVES, common_2.FORM_DIRECTIVES, common_1.NgIf]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map