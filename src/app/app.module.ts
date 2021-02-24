import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { NgxSpinnerModule } from "ngx-spinner";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component'; //"ng g c --name" ile compenent ekliyoruz ve root module otomatik olarak tanımlanıyor.
import { IgxNavbarModule,IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import {CookieService} from 'ngx-cookie-service'; //npm install ngx-cookie-service --save ile cookie servisini angular projemize dahil ettik

//Localization İşlemleri için Tarih vs...
import {registerLocaleData} from "@angular/common";
import localeTr from "@angular/common/locales/tr";
import localeTrExtra from "@angular/common/locales/extra/tr";
import { UserService } from 'src/lib/services/user.service';

//HTTP istekleri için tanımladık
import {HttpClientModule} from "@angular/common/http";

registerLocaleData(localeTr,"tr-TR",localeTrExtra);




@NgModule({
  //Home componenti ni buradan sildik.O artık home module de tanımlı olacaktır
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    HttpClientModule //HTTP istekleri için import ettik
  ],
  providers: [CookieService,UserService], //Cookie servisini ve User servisini providers a tanımladık , çünkü kendisi component değil bir servistir
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
