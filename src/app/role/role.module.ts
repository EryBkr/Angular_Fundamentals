import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:"",
    component:RoleComponent
  }
];

//ng g m name ile module oluşturdum
@NgModule({
  declarations: [RoleComponent], //Bu module ait olacak componentleri tanımlıyoruz
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class RoleModule { }
