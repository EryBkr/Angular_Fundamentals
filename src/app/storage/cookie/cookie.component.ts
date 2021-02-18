import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

name="";
cookieValue="";
isCookieExist:boolean=false; //Key e ait cookie kontrolü

  //Servisimizi inject ettik
  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
  }

  checkCookie(){
    //Key e ait cookie var mı yok mu _?
    this.isCookieExist=this.cookieService.check("name");
  }

  setItem(value){
    //Cookie servisi de key value şeklinde çalışır
    this.cookieService.set("name",value);
  }

  getItem(){
    //cookie den key e göre data aldık
    this.cookieValue=this.cookieService.get("name");
  }

  clearItem(){
    //Key değerine ait cookie temizlendi
    this.cookieService.delete("name");
  }

  clearAll(){
    //Tüm cookileri siler
    this.cookieService.deleteAll();
  }
}
