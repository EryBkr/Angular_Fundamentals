import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  users = [];
  randomUsers = [
    {
      id: 1,
      name: "Eray"
    },
    {
      id: 2,
      name: "Berkay"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  //Random listesinden bir kullanıyı rastgele olarak users dizisine ekliyoruz
  addRandomUser(){
    const index=Math.floor(Math.random()*2);
    this.users.push(this.randomUsers[index]);
  }

}
