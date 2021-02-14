import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';


//hangi url in hangi componente gideceğiniz belirliyoruz
const routes: Routes = [
  {
    path:"home",
    loadChildren:() => import("./home/home.module").then(m=>m.HomeModule)
    //Home modulü routing modüle tanımladık.Home ile ilgili yönlendirmelerden
    //HomeModule sorumlu olacaktır
  },
  {
    path:"role",
    component:RoleComponent
  },
  {
    path:"user",
    loadChildren:() => import("./user/user.module").then(m=>m.UserModule)
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
