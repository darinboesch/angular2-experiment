
import { bootstrap }  from 'angular2/platform/browser'
import { AppComponent } from './components/app.component'
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AlertsService } from './components/alerts/alerts.service';
import {HttpClient} from "./common/http-client";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    HttpClient,
    AlertsService
]);
