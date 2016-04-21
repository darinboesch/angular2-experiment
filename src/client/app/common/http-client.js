"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var HttpClient = (function () {
    function HttpClient(_http) {
        this._http = _http;
    }
    HttpClient.prototype.createHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    };
    HttpClient.prototype.get = function (url) {
        var headers = new http_1.Headers();
        this.createHeader(headers);
        return this._http.get(url, {
            headers: headers
        });
    };
    HttpClient.prototype.post = function (url, data) {
        var headers = new http_1.Headers();
        this.createHeader(headers);
        return this._http.post(url, data, {
            headers: headers
        });
    };
    HttpClient = __decorate([
        core_1.Injectable()
    ], HttpClient);
    return HttpClient;
}());
exports.HttpClient = HttpClient;
//# sourceMappingURL=http-client.js.map