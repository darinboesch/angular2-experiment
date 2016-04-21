import { Component, Input } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'dlb-hero-detail',
    templateUrl: 'app/components/heroes/hero-detail.component.html',
    styleUrls: ['css/hero-detail.component.css']
})
export class HeroDetailComponent {
    @Input() hero: Hero;

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

