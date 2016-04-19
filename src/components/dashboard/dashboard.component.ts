
import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
    selector: 'dlb-dashboard',
    templateUrl: 'src/components/dashboard/dashboard.component.html',
    styleUrls: ['assets/css/dashboard.component.css'],
})
export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
          _heroService.heroes
            .subscribe(
              heroes => this.heroes = heroes.slice(1,5),
              err => console.error('Error ' + err)
            );
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}
