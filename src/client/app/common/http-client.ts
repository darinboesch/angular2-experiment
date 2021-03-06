import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class HttpClient {
  constructor(private _http: Http) {}

  createHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
  }

  get(url: string) {
    let headers = new Headers();
    this.createHeader(headers);
    return this._http.get(url, {
      headers: headers
    });
  }

  post(url: string, data: string) {
    let headers = new Headers();
    this.createHeader(headers);
    return this._http.post(url, data, {
      headers: headers
    });
  }
}
