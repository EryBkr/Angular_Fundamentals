import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

// Bu componente normalde route value gönderiyorduk.Bu değeri alabilmek için activatedroute a
// ihtiyacımız var.bunun için activatedRoute nesnemizi kullandık

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      alert(param["id"]);
    });
  }

}
