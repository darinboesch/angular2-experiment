System.register(['angular2/platform/browser', './components/app.component', 'angular2/router', './common/authentication', 'angular2/http', './components/alerts/alerts.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, authentication_1, http_1, alerts_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (alerts_service_1_1) {
                alerts_service_1 = alerts_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                authentication_1.Authentication,
                alerts_service_1.AlertsService
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map