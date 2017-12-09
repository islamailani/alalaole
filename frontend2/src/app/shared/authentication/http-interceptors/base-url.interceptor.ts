import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

    constructor() { }

    private baseUrl = 'http://192.168.0.102:3000';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const reqUrl = `${this.baseUrl}${req.url}`;
        return next.handle(req.clone({ url: reqUrl }));
    }
}
