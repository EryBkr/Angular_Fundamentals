import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { NgxSpinnerModule } from "ngx-spinner";

import { IgxButtonModule } from 'igniteui-angular';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component'; //"ng g c --name" ile compenent ekliyoruz ve root module otomatik olarak tanımlanıyor.

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    RoleComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    IgxButtonModule,
    NgxSpinnerModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
