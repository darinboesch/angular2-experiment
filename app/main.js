"use strict";
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./components/app.component');
var router_1 = require('angular2/router');
var httpClient_1 = require('./common/httpClient');
var http_1 = require('angular2/http');
var alerts_service_1 = require('./components/alerts/alerts.service');
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    httpClient_1.HttpClient,
    alerts_service_1.AlertsService
]);
//# sourceMappingURL=main.js.map