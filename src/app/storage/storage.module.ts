import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { CookieComponent } from './cookie/cookie.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


//ng g module storage diyerek bir modül oluşturduk
//Module ve component ilişkisi fiziksel yolun yakınlığı ile ilişkilidir.
//Bu klasördeki en yakın module (storage.module) componentleri kendisi ekledi

const routes: Routes = [
  {
    path:"",
    //Bu module göre buradaki children routes tanımlamaları
    children:[
      {
          path:"cookie",
          component:CookieComponent
      },
      {
        path:"local-storage",
        component:LocalStorageComponent
      },
      {
        path:"",
        redirectTo:"local-storage",
        pathMatch:"full"
      }
    ]
  }
];

@NgModule({
  declarations: [LocalStorageComponent, CookieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule //Two Way Binding için formmodule ekledik
  ]
})
export class StorageModule { }
