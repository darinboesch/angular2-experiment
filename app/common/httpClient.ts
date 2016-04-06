import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import { Observable, Observer } from 'rxjs/Rx';
import { encodeDataPairs } from '../util/common';

@Injectable()
export class HttpClient {
  private static _token: string = undefined;
  
  constructor(private _http:Http) {
    
  }

  public static IsLoggedIn() {
    return !!this._token;
  }
  
  public createHeader(headers: Headers) {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }
  
  public createAuthHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  authenticate(username: string, password: string) {
    let headers = new Headers();
    this.createHeader(headers);
    
    let body = encodeDataPairs({grant_type: 'password', username: username, password: password});
    return Observable.create((observer: Observer<string>) => {
      this._http.post('http://dboesch.cloudapp.net/token', body, { headers: headers })
        .map(res => res.json())
        .subscribe(
          data => {
            console.log('token: ' + data.access_token);
            HttpClient._token = data.access_token;
            //localStorage.setItem('token', data.access_token);
            observer.next('token');
          },
          error => {
            console.log('Authentication failed. Error: ' + error.text());
            observer.error('Authentication failed');
          },
          () => {
            console.log('Authentication complete.')
          }
        );
    });
  }
  
  clearAuthentication() {
    HttpClient._token = undefined;
    return Observable.of(true);
  }
  
  get(url) {
    let headers = new Headers();
    this.createHeader(headers);
    this.createAuthHeader(headers);
    return this._http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createHeader(headers);
    this.createAuthHeader(headers);
    return this._http.post(url, data, {
      headers: headers
    });
  }
}
