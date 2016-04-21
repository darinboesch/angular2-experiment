import {Injectable, Inject} from 'angular2/core';
import {Hero} from './hero';
import {HEROES} from '../../mock/mock-heroes';
import {HttpClient} from '../../common/http-client';
import {Observable} from 'rxjs/Observable';
import {Config, APP_CONFIG} from '../app.config';

@Injectable()
export class HeroService {
    public heroes: Observable<Hero[]>;

    constructor(
      private _http: HttpClient,
      @Inject(APP_CONFIG) private _config: Config
    ) {
        this.heroes = _http.get(this._config.apiHeroes)
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
        return this._http.get(this._config.apiHeroes + '/' + id.toString())
          .map(response => response.json());
    }
}

