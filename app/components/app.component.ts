
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from 'angular2/router';

import { DROPDOWN_DIRECTIVES, Dropdown } from 'ng2-bootstrap/ng2-bootstrap';

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService }     from './heroes/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from "angular2/common";
import { Authentication } from '../common/authentication';

@Component({
    selector: 'ifs-app',
    templateUrl: 'app/components/app.component.html',
    styleUrls: ['assets/css/app.component.css'],
    directives: [ROUTER_DIRECTIVES, AlertsComponent, CORE_DIRECTIVES, FORM_DIRECTIVES, DROPDOWN_DIRECTIVES, Dropdown],
    providers: [
        ROUTER_PROVIDERS,
        Authentication,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/',
        redirectTo: ['Login']
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])
export class AppComponent {
    title: string = 'IFS is Angular!';
    crumb: string = 'IFS / Home';
    toggle: boolean = false;
    mobileView: number = 992;
    
    constructor(
        public router: Router,
        public auth: Authentication
    ) {
        this.attachEvents();
    }

    attachEvents() {
        window.onresize = ()=> {
            if (this.getWidth() >= this.mobileView) {
                if (localStorage.getItem('toggle')) {
                    this.toggle = !localStorage.getItem('toggle') ? false : true;
                } else {
                    this.toggle = true;
                }
            } else {
                this.toggle = false;
            }
        }
    }

    getWidth() {
        return window.innerWidth;
    }

    toggleSidebar() {
        this.toggle = !this.toggle;
        localStorage.setItem('toggle', this.toggle.toString());
    }

    onLogout() {
        this.auth.logout()
          .subscribe(
              () => this.router.navigate(['Login'])
          );
    }
}
