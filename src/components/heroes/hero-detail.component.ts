import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'dlb-hero-detail',
    templateUrl: 'src/components/heroes/hero-detail.component.html',
    styleUrls: ['assets/css/hero-detail.component.css'],
    inputs: ['hero']
})
export class HeroDetailComponent {
    hero: Hero;

    constructor(
      private _heroService: HeroService,
      private _routeParams: RouteParams) {
        _heroService.getHero(+this._routeParams.get('id'))
          .subscribe(
            hero => this.hero = hero,
            err => console.error('Error ' + err)
          );
    }

    goBack() {
        window.history.back();
    }
}

