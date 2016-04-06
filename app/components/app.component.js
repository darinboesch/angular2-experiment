"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hero_service_1 = require('./heroes/hero.service');
var heroes_component_1 = require('./heroes/heroes.component');
var hero_detail_component_1 = require('./heroes/hero-detail.component');
var alerts_component_1 = require('./alerts/alerts.component');
var common_1 = require("angular2/common");
var AppComponent = (function () {
    function AppComponent(router, http) {
        this.router = router;
        this.http = http;
        this.title = 'IFS is Angular!';
        this.crumb = 'IFS / Home';
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
        this.http.clearAuthentication()
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
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map