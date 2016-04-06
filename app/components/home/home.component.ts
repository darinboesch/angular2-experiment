
import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import { HttpClient } from '../../common/httpClient';
import { HeroService } from '../heroes/hero.service';

@Component({
    selector: 'ifs-home',
    template: `
        <nav>
            <h2>Welcome!</h2>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
    `,
    styleUrls: ['assets/css/home.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})

//@CanActivate(() => isLoggedin())
@CanActivate(() => HttpClient.IsLoggedIn())
export class HomeComponent {
    constructor() {}
}
