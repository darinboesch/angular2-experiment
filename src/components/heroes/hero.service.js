System.register(['angular2/core', '../../mock/mock-heroes', '../../common/http-client', '../app.config'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, mock_heroes_1, http_client_1, app_config_1;
    var HeroService;
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
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(_http, _config) {
                    this._http = _http;
                    this._config = _config;
                    this.heroes = _http.get(this._config.apiHeroes)
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
                    return this._http.get(this._config.apiHeroes + '/' + id.toString())
                        .map(function (response) { return response.json(); });
                };
                HeroService = __decorate([
                    core_1.Injectable(),
                    __param(1, core_1.Inject(app_config_1.APP_CONFIG)), 
                    __metadata('design:paramtypes', [http_client_1.HttpClient, Object])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map