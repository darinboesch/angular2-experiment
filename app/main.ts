
import { bootstrap }  from 'angular2/platform/browser'
import { AppComponent } from './components/app.component'
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HttpClient } from './common/httpClient';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AlertsService } from './components/alerts/alerts.service';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    HttpClient,
    AlertsService
]);
