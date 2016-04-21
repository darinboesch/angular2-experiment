import {Component, provide, Inject} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {DROPDOWN_DIRECTIVES, Dropdown} from 'ng2-bootstrap/ng2-bootstrap';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroService} from './heroes/hero.service';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {SumProcessorComponent} from './processor/sum-processor.component';
import {AlertsComponent} from './alerts/alerts.component';
import {Authentication} from '../common/authentication';
import {HttpClient} from '../common/http-client';
import {AlertsService} from './alerts/alerts.service';
import {CONFIG, Config, APP_CONFIG} from './app.config';
import {ProcessorService} from './processor/processor.service';

@Component({
    selector: 'dlb-app',
    templateUrl: 'app/components/app.component.html',
    styleUrls: ['css/app.component.css'],
    directives: [ROUTER_DIRECTIVES, AlertsComponent, CORE_DIRECTIVES, FORM_DIRECTIVES, DROPDOWN_DIRECTIVES, Dropdown],
    providers: [
        ROUTER_PROVIDERS,
        provide(APP_CONFIG, {useValue: CONFIG}),
        HttpClient,                 // todo - figure out how to push this down to the service and not here
        Authentication,
        AlertsService,
        HeroService,
        ProcessorService
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
    },
    {
        path: '/processor',
        name: 'SumProcessor',
        component: SumProcessorComponent
    }
])
export class AppComponent {
    crumb: string = 'Experiment / Home';
    toggle: boolean = false;
    mobileView: number = 992;

    constructor(
        @Inject(APP_CONFIG) private _config: Config,
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
        };
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
