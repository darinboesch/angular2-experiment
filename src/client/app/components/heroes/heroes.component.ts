import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'dlb-heroes',
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls: ['css/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
          _heroService.heroes
            .subscribe(
              heroes => this.heroes = heroes,
              err => console.error('Error ' + err)
            );
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
