"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var DashboardComponent = (function () {
    function DashboardComponent(_router, _heroService) {
        var _this = this;
        this._router = _router;
        this._heroService = _heroService;
        this.heroes = [];
        _heroService.heroes
            .subscribe(function (heroes) { return _this.heroes = heroes.slice(1, 5); }, function (err) { return console.error('Error ' + err); });
    }
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dlb-dashboard',
            templateUrl: 'app/components/dashboard/dashboard.component.html',
            styleUrls: ['css/dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map