import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';


//ng g guard name komutu ile child guard ekledim
//guard tipini eklerken seçmemizi istiyor

@Injectable({
  providedIn: 'root'
})
export class ChildGuardGuard implements CanActivateChild {

  //Login kontrolü için servisimi ekliyorum
  constructor(private userService:UserService) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //Login durumunda mı kontrol ediyoruz
    return this.userService.isLogIn;
  }

}
