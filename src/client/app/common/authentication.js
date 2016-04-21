"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Rx_1 = require('rxjs/Rx');
var utility_1 = require('./utility');
var Authentication = (function () {
    function Authentication(_http) {
        this._http = _http;
        this.token = localStorage.getItem('access_token');
    }
    Authentication.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var body = utility_1.encodeDataPairs({ grant_type: 'password', username: username, password: password });
        return Rx_1.Observable.create(function (observer) {
            _this._http.post('http://dboesch.cloudapp.net/token', body, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('token: ' + data.access_token);
                localStorage.setItem('access_token', data.access_token);
                observer.next('token');
            }, function (error) {
                console.log('Authentication failed. Error: ' + error.text());
                observer.error('Authentication failed');
            }, function () {
                console.log('Authentication complete.');
            });
        });
    };
    Authentication.prototype.logout = function () {
        this.token = undefined;
        localStorage.removeItem('access_token');
        return Rx_1.Observable.of(true);
    };
    Authentication = __decorate([
        core_1.Injectable()
    ], Authentication);
    return Authentication;
}());
exports.Authentication = Authentication;
function isLoggedIn() {
    return !!localStorage.getItem('access_token');
}
exports.isLoggedIn = isLoggedIn;
//# sourceMappingURL=authentication.js.map