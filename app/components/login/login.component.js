System.register(['angular2/core', 'angular2/router', 'angular2/common', '../../common/authentication', '../alerts/alerts.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, common_2, authentication_1, alerts_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            },
            function (alerts_service_1_1) {
                alerts_service_1 = alerts_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, auth, _builder, _alertsService) {
                    this.router = router;
                    this.auth = auth;
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
                    this.auth.login(value.username, value.password)
                        .subscribe(function (token) {
                        _this.router.navigate(['Home']);
                    }, function () {
                        _this._alertsService.addAlert('danger', 'Unauthorized credentials.');
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'ifs-login',
                        providers: [
                            authentication_1.Authentication
                        ],
                        templateUrl: 'app/components/login/login.component.html',
                        directives: [router_1.RouterLink, common_2.CORE_DIRECTIVES, common_2.FORM_DIRECTIVES, common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, authentication_1.Authentication, common_1.FormBuilder, alerts_service_1.AlertsService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map