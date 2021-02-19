import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilteringPipe, TlConvertPipe } from 'src/lib';

const routes:Routes=[
  {
    path:"",
    component:PipesComponent
  }
];


@NgModule({
  //Bu modüle ait bir componentte custom pipe kullanacağımız için burada pipe ts dosyamızı tanıttık
  declarations: [PipesComponent,TlConvertPipe,FilteringPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PipesModule { }
