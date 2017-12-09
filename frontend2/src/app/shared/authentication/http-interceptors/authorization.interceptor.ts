import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('/auth') > -1 || req.url.indexOf('logout') === 0) {
            return next.handle(req);
        }


        const auth: AuthService = this.injector.get(AuthService);
        const authRequest = req.clone({
            headers: req.headers.set('x-api-token', auth.getToken())
        });
        return next.handle(authRequest);
    }
}
