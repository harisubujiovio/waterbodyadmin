import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, take } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthTokenHttpInterceptor implements HttpInterceptor {

    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        let token: string | null = localStorage.getItem("accessToken");
        if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'JWT ' + token) });
        }
        return next.handle(req);
    }
}

export const AuthTokenHttpInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenHttpInterceptor,
    multi: true
}