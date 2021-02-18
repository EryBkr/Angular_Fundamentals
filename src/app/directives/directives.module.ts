import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/lib'; //dosya yolunun kısa olmasının nedeni index.ts dosyamız içerisinde directive yolunu tanıtmış olmamızdır

const routes:Routes=[
  {
    path:"",
    component:DirectivesComponent
  }
];

@NgModule({
  //Custom Directive TS Dosyamızı decleration ettik
  declarations: [DirectivesComponent,HighlightDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule //Two Way Binding
  ]
})
export class DirectivesModule { }
