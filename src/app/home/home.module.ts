import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IgxButtonModule } from 'igniteui-angular';
import { Routes, RouterModule } from '@angular/router';

//Lazy Loading için componentlere ekstra moduller eklenir.
//Net Core MVC de ki section kavramı gibi düşünülebilir fakat routing içinde kullanılır
const routes: Routes = [
  {
    path:"",
    //Bu componente geldiği zaman /home dışında url pattern yok ise direkt homecomp. e yönlenecek
    component:HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    IgxButtonModule, //Bu module sadece home da çalışacak şekilde deklere edildi
    CommonModule,
    RouterModule.forChild(routes) //child route olduğun için tanımlamayı bu şekilde değiştirdik
  ]
})


export class HomeModule { }
