System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './headers'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, headers_1;
    var Authentication;
    function isLoggedin() {
        return !!localStorage.getItem('token');
    }
    exports_1("isLoggedin", isLoggedin);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            Authentication = (function () {
                function Authentication(http) {
                    this.http = http;
                    this.token = localStorage.getItem('token');
                }
                Authentication.prototype.login = function (username, password) {
                    var that = this;
                    var body = that.encodeDataPairs({ grant_type: 'password', username: username, password: password });
                    var source = Rx_1.Observable.create(function (observer) {
                        that.http.post('http://dboesch.cloudapp.net/token', body, { headers: headers_1.contentHeaders })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            console.log('token: ' + data.access_token);
                            localStorage.setItem('token', data.access_token);
                            observer.next('token');
                        }, function (error) {
                            console.log('Authentication failed. Error: ' + error.text());
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
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Authentication);
                return Authentication;
            }());
            exports_1("Authentication", Authentication);
        }
    }
});
//# sourceMappingURL=authentication.js.map