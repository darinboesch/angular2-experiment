"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Rx_1 = require('rxjs/Rx');
var SumProcessorComponent = (function () {
    function SumProcessorComponent(processorService, el) {
        var _this = this;
        this.processorService = processorService;
        this.el = el;
        processorService.fields
            .subscribe(function (fields) { return _this.fields = fields; }, function (err) { return console.error('Error ' + err); });
        var eventStream = Rx_1.Observable.fromEvent(el.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; }) // extract the value of the input
            .filter(function (text) { return text.length > 0; }) // filter out if empty
            .debounceTime(400);
        eventStream.subscribe(function (input) { return _this.processorService.processSum(_this.fields); });
    }
    SumProcessorComponent = __decorate([
        core_1.Component({
            selector: 'dlb-sum-processor',
            templateUrl: 'app/components/processor/sum-processor.component.html'
        })
    ], SumProcessorComponent);
    return SumProcessorComponent;
}());
exports.SumProcessorComponent = SumProcessorComponent;
//# sourceMappingURL=sum-processor.component.js.map