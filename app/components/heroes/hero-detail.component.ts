import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

// just a comment....

@Component({
    selector: 'ifs-hero-detail',
    templateUrl: 'app/components/heroes/hero-detail.component.html',
    styleUrls: ['assets/css/hero-detail.component.css'],
    inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}

