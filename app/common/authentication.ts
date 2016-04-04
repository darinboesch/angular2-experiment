import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable, Observer } from 'rxjs/Rx';
import { contentHeaders } from './headers';

@Injectable()
export class Authentication {
    token: string;
    
    constructor(public http: Http) {
        this.token = localStorage.getItem('token');
    }

    login(username: string, password: string) {
        let that = this;
        let body = that.encodeDataPairs({grant_type: 'password', username: username, password: password});
        var source = Observable.create(function (observer: Observer<string>) {
        
            that.http.post('http://dboesch.cloudapp.net/token', body, { headers: contentHeaders })
                .map(res => res.json())
                .subscribe(
                    data => {
                        console.log('token: ' + data.access_token);
                        localStorage.setItem('token', data.access_token);
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
        
        //return Rx.Observable.of('token');
        return source;
    }

    logout() {
        this.token = undefined;
        localStorage.removeItem('token');
        //return Rx.Observable.of(true);
        return Observable.of(true);
    }

    private encodeDataPairs(obj) {
        var str = [];
        for(var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }
}

export function isLoggedin() {
    return !!localStorage.getItem('token');
}
