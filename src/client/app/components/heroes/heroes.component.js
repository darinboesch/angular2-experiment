"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var hero_detail_component_1 = require('./hero-detail.component');
var HeroesComponent = (function () {
    function HeroesComponent(_router, _heroService) {
        var _this = this;
        this._router = _router;
        this._heroService = _heroService;
        _heroService.heroes
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (err) { return console.error('Error ' + err); });
    }
    HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    HeroesComponent.prototype.gotoDetail = function () {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'dlb-heroes',
            templateUrl: 'app/components/heroes/heroes.component.html',
            styleUrls: ['css/heroes.component.css'],
            directives: [hero_detail_component_1.HeroDetailComponent]
        })
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map