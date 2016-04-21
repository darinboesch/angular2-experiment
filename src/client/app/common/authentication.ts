import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable, Observer} from 'rxjs/Rx';
import {encodeDataPairs} from './utility';

@Injectable()
export class Authentication {
  token: string;

  constructor(private _http: Http) {
    this.token = localStorage.getItem('access_token');
  }

  login(username: string, password: string) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let body = encodeDataPairs({grant_type: 'password', username: username, password: password});
    return Observable.create((observer:Observer<string>) => {
      this._http.post('http://dboesch.cloudapp.net/token', body, {headers: headers})
        .map(res => res.json())
        .subscribe(
          data => {
            console.log('token: ' + data.access_token);
            localStorage.setItem('access_token', data.access_token);
            observer.next('token');
          },
          error => {
            console.log('Authentication failed. Error: ' + error.text());
            observer.error('Authentication failed');
          },
          () => {
            console.log('Authentication complete.');
          }
        );
    });
  }

  logout() {
    this.token = undefined;
    localStorage.removeItem('access_token');
    return Observable.of(true);
  }
}

export function isLoggedIn() {
  return !!localStorage.getItem('access_token');
}
