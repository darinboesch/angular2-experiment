import {Injectable, Inject} from 'angular2/core';
import {pField} from './p-field';
import {Response} from 'angular2/http';
import {HttpClient} from '../../common/http-client';
import {Observable} from 'rxjs/Rx';
import {Config, APP_CONFIG} from '../app.config';

@Injectable()
export class ProcessorService {
  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config: Config
  ) {
  }

  sum(fields: pField[]): Observable<pField[]> {
    return this._http.post(this._config.apiProcessor, JSON.stringify(fields))
      .map((response: Response) => {
        return (<any>response.json()).map(item => {
          console.log("raw item", item); // uncomment if you want to debug
          return new pField({
            id: item.id,
            value: item.value
          });
        });
      });
  }
}

