"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var Rx_1 = require('rxjs/Rx');
var app_config_1 = require('../app.config');
var ProcessorService = (function () {
    function ProcessorService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this.updates = new Rx_1.Subject();
        this.newFields = new Rx_1.Subject();
        // action streams
        this.create = new Rx_1.Subject();
        this.set = new Rx_1.Subject();
        this.fields = this.updates
            .scan(function (fields, operation) {
            return operation(fields);
        }, [])
            .publishReplay(1)
            .refCount();
        this.create
            .map(function (opField) {
            return function (fields) {
                return fields.concat(opField);
            };
        })
            .subscribe(this.updates);
        this.set
            .map(function (opFields) {
            return function (fields) {
                return fields.map(function (fld) {
                    var opFld = opFields.find(function (of) {
                        return of.id === fld.id;
                    });
                    return opFld || fld;
                });
            };
        })
            .subscribe(this.updates);
        this.newFields
            .subscribe(this.create);
        // initialize the fields
        this.resetFields();
    }
    ProcessorService.prototype.resetFields = function () {
        var _this = this;
        this._http.get(this._config.apiSets + '/1')
            .map(function (response) { return response.json().fields; })
            .subscribe(function (fields) { return _this.newFields.next(fields); });
    };
    ProcessorService.prototype.processSum = function (fields) {
        var _this = this;
        this._http.post(this._config.apiProcessor, JSON.stringify(fields))
            .map(function (response) { return response.json(); })
            .subscribe(function (fields) { return _this.set.next(fields); });
    };
    ProcessorService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(app_config_1.APP_CONFIG))
    ], ProcessorService);
    return ProcessorService;
}());
exports.ProcessorService = ProcessorService;
//# sourceMappingURL=processor.service.js.map