import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor() { }

  //Parent componentten gelen datayı yakalamak için input ön ekini kullandık
  @Input() data;


  //Parent a data göndermek için kullanılır
  @Output() resetForm: EventEmitter<any> = new EventEmitter();



  ngOnInit(): void {
  }



  alertChild(){
    alert("Child Tetiklendi");
  }

}
