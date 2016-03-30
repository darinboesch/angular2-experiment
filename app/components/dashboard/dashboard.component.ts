
import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
    selector: 'ifs-dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    styleUrls: ['assets/css/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }

    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}
