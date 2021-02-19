import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  //Pipes test text
  title = "AnKaRa TürKiyenin BaşKentidir";
  TurkishUpperCase = "";
  today;
  cashValue = 120.65;
  percentVal=333.3;
  cityName="İstanbul";
  //Custom Pipe için bir array tanılıyoruz
  cities:string[]=[
    "İstanbul","İzmir","Ankara","Edirne","Antalya"
  ];

  //Json Pipe Object Value
  myObject: Object = {
    foo: "bar",
    baz: "dux",
    nested: { xyz: 3, number: [1, 2, 3, 4] }
  };

  ngOnInit(): void {
    this.today = new Date().toString();
    this.TurkishUpperCase = (this.title as any).toLocaleUpperCase("tr-TR");
  }

}
