import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { FormsModule } from '@angular/forms';

//lib in altında child module oluşturup bu module child component bağladık
//export olarak componenti vermemizin nedeni başka moduller de bu componente ulaşabilsin

@NgModule({
  declarations: [Child1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[Child1Component]
})
export class ChildModuleModule { }
