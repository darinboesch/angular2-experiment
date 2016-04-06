import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import {Hero} from './hero';
import {HEROES} from '../../mock/mock-heroes';
import {HttpClient} from '../../common/httpClient';

var HEROES_URL: string = 'http://dboesch.cloudapp.net/heroes';

@Injectable()
export class HeroService {
//    getHeroes() {
//        return Promise.resolve(HEROES);
//    }

    constructor(
      private _http: HttpClient
    ) {

    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 5000) // 5 seconds
        );
    }
    
    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
    
    getHeroes() {
      return Promise.resolve(this._http.get(HEROES_URL));
    }
}

