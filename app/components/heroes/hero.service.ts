import {Injectable} from 'angular2/core';
import {Response} from 'angular2/http';
import {Hero} from './hero';
import {HEROES} from '../../mock/mock-heroes';
import {HttpClient} from '../../common/http-client';
import {Observable} from "rxjs/Observable";

var HEROES_URL: string = 'http://dboesch.cloudapp.net/rsp/heroes';

@Injectable()
export class HeroService {
    public heroes: Observable<Hero[]>;

    constructor(
      private _http: HttpClient
    ) {
        this.heroes = _http.get(HEROES_URL)
          .map(response => response.json());
    }

    getHeroes() {
        return this.heroes;
    }

    getHeroesStatic() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 5000) // 5 seconds
        );
    }
    
    getHero(id: number) : Observable<Hero> {
        return this._http.get(HEROES_URL + '/' + id.toString()).map(response => response.json());
    }
}

