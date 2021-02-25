import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

//ng g interceptor name komutu ile interceptor oluşturduk
//interceptor http isteklerinde araya giren yapılardır

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  //DI ile login ve getToken operasyonlarını barındıran servisimi ekliyorum
  constructor(private userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //HTTP isteklerinde header a token bilgisini ekledik
    request=request.clone({setHeaders:{Authorization:`Bearer ${this.userService.getToken()}`},withCredentials:true});
    return next.handle(request);
  }
}
