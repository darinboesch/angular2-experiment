System.register(['angular2/core', 'rxjs/Rx', './alert'], function(exports_1, context_1) {
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
    var core_1, Rx_1, alert_1;
    var initialAlerts, AlertsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (alert_1_1) {
                alert_1 = alert_1_1;
            }],
        execute: function() {
            initialAlerts = [];
            AlertsService = (function () {
                function AlertsService() {
                    // data management streams
                    this.newAlerts = new Rx_1.Subject();
                    this.updates = new Rx_1.Subject();
                    // action streams
                    this.create = new Rx_1.Subject();
                    this.remove = new Rx_1.Subject();
                    this.clear = new Rx_1.Subject();
                    this.alerts = this.updates
                        .scan(function (alerts, operation) {
                        return operation(alerts);
                    }, initialAlerts)
                        .publishReplay(1)
                        .refCount();
                    this.create
                        .map(function (alert) {
                        return function (alerts) {
                            return alerts.concat(alert);
                        };
                    })
                        .subscribe(this.updates);
                    this.newAlerts
                        .subscribe(this.create);
                    this.remove
                        .map(function (id) {
                        return function (alerts) {
                            return alerts.filter(function (alert) {
                                return (alert.id !== id);
                            });
                        };
                    })
                        .subscribe(this.updates);
                    this.clear
                        .map(function () {
                        return function () {
                            return initialAlerts;
                        };
                    })
                        .subscribe(this.updates);
                }
                // an imperative function call to this action stream
                AlertsService.prototype.addAlert = function (type, msg) {
                    this.newAlerts.next(new alert_1.Alert({ type: type, msg: msg }));
                };
                AlertsService.prototype.clearAlerts = function () {
                    this.clear.next('clear');
                };
                AlertsService.prototype.removeAlert = function (id) {
                    this.remove.next(id);
                };
                AlertsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AlertsService);
                return AlertsService;
            }());
            exports_1("AlertsService", AlertsService);
        }
    }
});
//# sourceMappingURL=alerts.service.js.map