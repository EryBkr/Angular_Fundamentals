import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

//hangi url in hangi componente gideceğiniz belirliyoruz
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"role",
    component:RoleComponent
  },
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"user/:id", //buradan id değerini alarak userdetail componentimize yönlendirme yapacağımızı belirtiyoruz
    component:UserDetailComponent
  },
  {
    path:"**", //Tanımlanmamış bir url e gidilirse home ' a yönlendirdik
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
