import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from 'src/lib/chilld-components/child1/child1.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {

  constructor() { }

  //child component ile iletişime geçtik ve ona ait olan yapıları kullanabilir hale geldik
  @ViewChild(Child1Component) child1: Child1Component;

  //Child componentimize gidecek olan objenin değişkenleri
  name = "";
  successStatus: boolean;

  //Child componente gidecek olan obje
  postData;


  ngOnInit(): void {
  }

  postDataMethod() {
    this.postData = {
      name: this.name,
      status: this.successStatus
    }
  }

  //Child tarafında output nesnemiz tetiklendi ve bu metodumuzun çalışmasını sağladı
  resetFormAction(event) {
    alert(event);
  }


  //Child component e ait metodu çalıştırdık
  childTrigger() {
    this.child1.alertChild();
  }

}
