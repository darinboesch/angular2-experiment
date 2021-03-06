"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_heroService, _routeParams) {
        var _this = this;
        this._heroService = _heroService;
        this._routeParams = _routeParams;
        _heroService.getHero(+this._routeParams.get('id'))
            .subscribe(function (hero) { return _this.hero = hero; }, function (err) { return console.error('Error ' + err); });
    }
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input()
    ], HeroDetailComponent.prototype, "hero");
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'dlb-hero-detail',
            templateUrl: 'app/components/heroes/hero-detail.component.html',
            styleUrls: ['css/hero-detail.component.css']
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map