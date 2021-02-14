import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { NgxSpinnerModule } from "ngx-spinner";
import { RoleComponent } from './role/role.component'; //"ng g c --name" ile compenent ekliyoruz ve root module otomatik olarak tanımlanıyor.


@NgModule({
  //Home componenti ni buradan sildik.O artık home module de tanımlı olacaktır
  declarations: [
    AppComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
