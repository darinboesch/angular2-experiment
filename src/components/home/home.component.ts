
import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import { isLoggedIn } from '../../common/authentication';
import { HeroService } from '../heroes/hero.service';
import {ProcessorService} from "../processor/processor.service";

@Component({
    selector: 'dlb-home',
    template: `
        <nav>
            <h2>Welcome!</h2>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
            <a [routerLink]="['SumProcessor']">Sum Processor</a>
        </nav>
    `,
    styleUrls: ['assets/css/home.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService,
        ProcessorService
    ]
})

@CanActivate(() => isLoggedIn())
export class HomeComponent {
    constructor() {}
}
