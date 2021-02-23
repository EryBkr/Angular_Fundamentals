import { Injectable } from '@angular/core';
import { of } from 'rxjs';



//ng g service [name] komutu ile servis oluşturduk
@Injectable({
  providedIn: 'root'
})
export class UserService {


  //Bu isimler api tarafında varmış olarak kabul edelim.Buna göre kontrol edeceğiz
  users = ["eray", "berkay"];

  //Login durumunu kontrol edecek değişken
  isLogIn = false;

  constructor() { }

  isExistName(val: string) {
    //Gönderdiğimiz username api tarafında kayıtlı mı ?
    if (this.users.indexOf(val) > -1) {
      return of(true); //of operatorü değişkenleri observable hale getiriyor
    }
    return of(false);
  }

  //Login ise Logout değilse login durumuna getirecek olan fonksiyon
  login() {
    this.isLogIn = !this.isLogIn;
  }
}
