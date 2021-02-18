import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor() { }


  title=false;
  name="";
  switchControlName="";
  color="";

  //For yapısı için oluşturduğumuz Array
  cities=[
    {id:10,name:"İstanbul"},
    {id:20,name:"Ankara"},
    {id:30,name:"Eskişehir"},
    {id:40,name:"Sakarya"}
  ];

  ngOnInit(): void {
  }


  changeTitle(){
    //Title değerini her seferinde değiştiriyoruz bir nevi toggle işlemi yapıyor
   this.title=!this.title;
  }

}
