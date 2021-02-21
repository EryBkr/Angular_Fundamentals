import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/lib/services/user.service';

const routes:Routes=[
  {
    path:"",
    component:FormsComponent
  }
];

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule //Reactive Form ları kullanabilmek için ekledik.
  ],
  providers:[UserService] //user servisimizi module ekledik
})
export class AngularFormsModule { }
