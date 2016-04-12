System.register(['angular2/core', 'angular2/common', './alerts.service'], function(exports_1, context_1) {
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
    var core_1, common_1, alerts_service_1;
    var AlertsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (alerts_service_1_1) {
                alerts_service_1 = alerts_service_1_1;
            }],
        execute: function() {
            AlertsComponent = (function () {
                function AlertsComponent(_alertsService) {
                    this._alertsService = _alertsService;
                    //this.alerts = _alertsService.alerts;
                    //this.alerts
                    //  .subscribe(
                    //    alerts => { console.log(alerts.length > 0); }
                    //  );
                }
                AlertsComponent.prototype.ngOnInit = function () {
                    this.alerts = this._alertsService.alerts;
                };
                AlertsComponent.prototype.closeAlert = function (id) {
                    this._alertsService.removeAlert(id);
                };
                AlertsComponent = __decorate([
                    core_1.Component({
                        selector: 'dlb-alerts',
                        templateUrl: 'app/components/alerts/alerts.component.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [alerts_service_1.AlertsService])
                ], AlertsComponent);
                return AlertsComponent;
            }());
            exports_1("AlertsComponent", AlertsComponent);
        }
    }
});
//# sourceMappingURL=alerts.component.js.map