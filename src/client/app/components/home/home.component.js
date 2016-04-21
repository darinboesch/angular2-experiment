"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var authentication_1 = require('../../common/authentication');
var hero_service_1 = require('../heroes/hero.service');
var processor_service_1 = require('../processor/processor.service');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'dlb-home',
            template: "\n        <nav>\n            <h2>Welcome!</h2>\n            <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['Heroes']\">Heroes</a>\n            <a [routerLink]=\"['SumProcessor']\">Sum Processor</a>\n        </nav>\n    ",
            styleUrls: ['css/home.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                hero_service_1.HeroService,
                processor_service_1.ProcessorService
            ]
        }),
        router_1.CanActivate(function () { return authentication_1.isLoggedIn(); })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map