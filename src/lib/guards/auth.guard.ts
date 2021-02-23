import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';


//"ng g guard auth"  komutu ile guard ı oluşturduk

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //Servisimde ki isLogIn değişkenine göre guard işlemi yapacağım için
  //ona erişmek adın DI ile userService yi ekliyorum
  constructor(private userService:UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //Login mi yoksa Logout durumunda mı bu değişken ile anlıyoruz.
    return this.userService.isLogIn;
  }

}
