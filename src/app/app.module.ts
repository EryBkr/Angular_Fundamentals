import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { NgxSpinnerModule } from "ngx-spinner";
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component'; //"ng g c --name" ile compenent ekliyoruz ve root module otomatik olarak tanımlanıyor.
import { IgxNavbarModule,IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import {CookieService} from 'ngx-cookie-service'; //npm install ngx-cookie-service --save ile cookie servisini angular projemize dahil ettik

//Localization İşlemleri için Tarih vs...
import {registerLocaleData} from "@angular/common";
import localeTr from "@angular/common/locales/tr";
import localeTrExtra from "@angular/common/locales/extra/tr";

registerLocaleData(localeTr,"tr-TR",localeTrExtra);




@NgModule({
  //Home componenti ni buradan sildik.O artık home module de tanımlı olacaktır
  declarations: [
    AppComponent,
    RoleComponent,
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
    IgxNavigationDrawerModule
  ],
  providers: [CookieService], //Cookie servisini providers a tanımladık , çünkü kendisi component değil bir servistir
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
