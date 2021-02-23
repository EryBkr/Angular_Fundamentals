import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRoleComponent } from './user/user-role/user-role.component';
import { Routes,RouterModule } from '@angular/router';
import { ChildGuardGuard } from 'src/lib/guards/child-guard.guard';

//Lazy Loading için componentlere ekstra moduller eklenir.
//Net Core MVC de ki section kavramı gibi düşünülebilir fakat routing içinde kullanılır
const routes: Routes = [
  {
    path:"",
    //Bu componente geldiği zaman /user dışında url pattern yok ise direkt userlistcomp. e yönlenecek
    component:UserListComponent
  },
  {
    path:":id", //buradan id değerini alarak userdetail veya role componentimize yönlendirme yapacağımızı belirtiyoruz
    component:UserComponent,
    children:[
      {
        path:"details",
        component:UserDetailComponent
      },
      {
        path:"role",
        component:UserRoleComponent
      },
      {
        path:"", // domain.com/user/5 şeklinde bir tanımlama yapıldıysa eğer userdetail e gitmesi gerektiğini belirttik
        redirectTo:"details",
        pathMatch:"full"
      }
    ],
    canActivateChild:[ChildGuardGuard] //Tüm module erişimi kapatmadık.O modülün kapanmasını istediğimiz componentine childCanActivated verdik
  }
];

@NgModule({
  declarations: [UserListComponent, UserComponent, UserDetailComponent, UserRoleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) //child route olduğun için tanımlamayı bu şekilde değiştirdik
  ]
})
export class UserModule { }
