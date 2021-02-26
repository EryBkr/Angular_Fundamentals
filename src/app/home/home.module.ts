import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IgxButtonModule } from 'igniteui-angular';
import { Routes, RouterModule } from '@angular/router';

//Translate kütüphaneleri
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpClient} from "@angular/common/http";

//Lazy Loading için componentlere ekstra moduller eklenir.
//Net Core MVC de ki section kavramı gibi düşünülebilir fakat routing içinde kullanılır
const routes: Routes = [
  {
    path: "",
    //Bu componente geldiği zaman /home dışında url pattern yok ise direkt homecomp. e yönlenecek
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    IgxButtonModule, //Bu module sadece home da çalışacak şekilde deklere edildi
    CommonModule,
    RouterModule.forChild(routes), //child route olduğun için tanımlamayı bu şekilde değiştirdik
    //Translate module tanımlamaları
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})


export class HomeModule { }

//Custom olarak loadFactory oluşturduk ve bu yola json dosyası ekleyeceğiz
//Componentlerde tanıttığımız json dosyasına göre oradaki value ler kullanılacaktır
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,"./../../assets/i18n/",".json");
}
