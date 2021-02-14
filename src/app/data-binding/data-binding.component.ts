import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  //UI Tarafına göndermek için obje oluşturduk
  user:any={
    name:"Eray",
    surname:"Bakır",
    picture:"https://picsum.photos/150/100",
    isEditable:false
  }

  type:string="text";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    alert("butona tıklandı");
  }

  pushEnter(value){
    alert(value);
  }

}
