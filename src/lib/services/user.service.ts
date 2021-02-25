import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  isExistName(val: string) {
    //Gönderdiğimiz username api tarafında kayıtlı mı ?
    if (this.users.indexOf(val) > -1) {
      return of(true); //of operatorü değişkenleri observable hale getiriyor
    }
    return of(false);
  }

  //Login servisine username ve password gönderiyoruz
  login() {

    const user = {
      "username": "name",
      "password": "123"
    };
    //Geriye dönen değer token içerecektir (giriş başarılı ise)
    return this.http.post<any>("environment tarafından alınacak url", user);
  }

  logout(){
    //token bilgimizi sildik
    localStorage.removeItem("token");
  }


  getToken() {
    //Local Storage de olmasını beklediğim token i alıyorum
    const token = localStorage.getItem("token");

    //Token mevcut ise dönüyorum
    if (token)
      return token;
    //Mevcur değilse login metodumu çağırıp tokeni Local Storage ye kaydediyorum
    //Sonrasında metodumu tekrar çalıştırarak token bilgisini dönmüş oluyorum
    else {
      this.login().subscribe(data => {
        localStorage.setItem("token", data);
        this.getToken();
      });

    }
  }

}


