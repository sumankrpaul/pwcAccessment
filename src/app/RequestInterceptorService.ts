import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const secureReq = req.clone({
        url: req.url.replace('apibase/', 'https://jsonplaceholder.typicode.com/')
      });
      console.log(secureReq.url);
    return next.handle(secureReq);
  }
}
