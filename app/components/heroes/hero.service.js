System.register(['angular2/core', '../../mock/mock-heroes', '../../common/http-client'], function(exports_1, context_1) {
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
    var core_1, mock_heroes_1, http_client_1;
    var HEROES_URL, HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (http_client_1_1) {
                http_client_1 = http_client_1_1;
            }],
        execute: function() {
            HEROES_URL = 'http://dboesch.cloudapp.net/rsp/heroes';
            HeroService = (function () {
                function HeroService(_http) {
                    this._http = _http;
                    this.heroes = _http.get(HEROES_URL)
                        .map(function (response) { return response.json(); });
                }
                HeroService.prototype.getHeroes = function () {
                    return this.heroes;
                };
                HeroService.prototype.getHeroesStatic = function () {
                    return Promise.resolve(mock_heroes_1.HEROES);
                };
                HeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 5000);
                    } // 5 seconds
                     // 5 seconds
                    );
                };
                HeroService.prototype.getHero = function (id) {
                    return this._http.get(HEROES_URL + '/' + id.toString()).map(function (response) { return response.json(); });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_client_1.HttpClient])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map