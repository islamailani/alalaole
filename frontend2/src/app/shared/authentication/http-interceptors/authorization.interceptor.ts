import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

    constructor(private injector: Injector,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('login') > -1) {
            return next.handle(req);
        }
        if (req.url.indexOf('register') > -1) {
            return next.handle(req);
        }
        if (this.router.url.length === 1) {
            return next.handle(req);
        }
        if (req.url.indexOf('issues') > -1 && localStorage.length === 0) {
            return next.handle(req);
        }

        const auth: AuthService = this.injector.get(AuthService);
        const authRequest = req.clone({
            headers: req.headers.set('x-api-token', auth.getToken())
        });
        return next.handle(authRequest);
    }
}
