System.register(['angular2/core', 'angular2/router', 'ng2-bootstrap/ng2-bootstrap', './login/login.component', './home/home.component', './dashboard/dashboard.component', './heroes/hero.service', './heroes/heroes.component', './heroes/hero-detail.component', './alerts/alerts.component', 'angular2/common', '../common/authentication', '../common/http-client', "./alerts/alerts.service", './app.config'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_bootstrap_1, login_component_1, home_component_1, dashboard_component_1, hero_service_1, heroes_component_1, hero_detail_component_1, alerts_component_1, common_1, authentication_1, http_client_1, alerts_service_1, app_config_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (alerts_component_1_1) {
                alerts_component_1 = alerts_component_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            },
            function (http_client_1_1) {
                http_client_1 = http_client_1_1;
            },
            function (alerts_service_1_1) {
                alerts_service_1 = alerts_service_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_config, router, auth) {
                    this._config = _config;
                    this.router = router;
                    this.auth = auth;
                    this.crumb = 'Experiment / Home';
                    this.toggle = false;
                    this.mobileView = 992;
                    this.attachEvents();
                }
                AppComponent.prototype.attachEvents = function () {
                    var _this = this;
                    window.onresize = function () {
                        if (_this.getWidth() >= _this.mobileView) {
                            if (localStorage.getItem('toggle')) {
                                _this.toggle = !localStorage.getItem('toggle') ? false : true;
                            }
                            else {
                                _this.toggle = true;
                            }
                        }
                        else {
                            _this.toggle = false;
                        }
                    };
                };
                AppComponent.prototype.getWidth = function () {
                    return window.innerWidth;
                };
                AppComponent.prototype.toggleSidebar = function () {
                    this.toggle = !this.toggle;
                    localStorage.setItem('toggle', this.toggle.toString());
                };
                AppComponent.prototype.onLogout = function () {
                    var _this = this;
                    this.auth.logout()
                        .subscribe(function () { return _this.router.navigate(['Login']); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ifs-app',
                        templateUrl: 'app/components/app.component.html',
                        styleUrls: ['assets/css/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, alerts_component_1.AlertsComponent, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES, ng2_bootstrap_1.Dropdown],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            core_1.provide(app_config_1.APP_CONFIG, { useValue: app_config_1.CONFIG }),
                            http_client_1.HttpClient,
                            authentication_1.Authentication,
                            alerts_service_1.AlertsService,
                            hero_service_1.HeroService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            redirectTo: ['Login']
                        },
                        {
                            path: '/login',
                            name: 'Login',
                            component: login_component_1.LoginComponent
                        },
                        {
                            path: '/home',
                            name: 'Home',
                            component: home_component_1.HomeComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        }
                    ]),
                    __param(0, core_1.Inject(app_config_1.APP_CONFIG)), 
                    __metadata('design:paramtypes', [Object, router_1.Router, authentication_1.Authentication])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map