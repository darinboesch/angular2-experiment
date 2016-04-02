"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Rx_1 = require('rxjs/Rx');
var headers_1 = require('./headers');
var Authentication = (function () {
    function Authentication(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }
    Authentication.prototype.login = function (username, password) {
        var that = this;
        var body = that.encodeDataPairs({ grant_type: 'password', username: username, password: password });
        var source = Rx_1.Observable.create(function (observer) {
            observer.error('Authentication failed');
            return source;
            that.http.post('http://localhost:4100/token', body, { headers: headers_1.contentHeaders })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('token: ' + data.access_token);
                localStorage.setItem('token', data.access_token);
                //return Rx.Observable.of('token');
                //observer.of('token');
                observer.next('token');
            }, function (error) {
                console.log('Authentication failed. Error: ' + error.text());
                //return Rx.Observable.throw('authentication failure');
                observer.error('Authentication failed');
            }, function () {
                console.log('Authentication complete.');
            });
        });
        //return Rx.Observable.of('token');
        return source;
    };
    Authentication.prototype.logout = function () {
        this.token = undefined;
        localStorage.removeItem('token');
        //return Rx.Observable.of(true);
        return Rx_1.Observable.of(true);
    };
    Authentication.prototype.encodeDataPairs = function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    };
    Authentication = __decorate([
        core_1.Injectable()
    ], Authentication);
    return Authentication;
}());
exports.Authentication = Authentication;
function isLoggedin() {
    return !!localStorage.getItem('token');
}
exports.isLoggedin = isLoggedin;
//# sourceMappingURL=authentication.js.map