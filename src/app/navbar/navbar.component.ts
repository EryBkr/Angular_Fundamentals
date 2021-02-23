import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/lib/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //Login olayını gerçekleştirecek servisimizi DI ile ekledik.
  //AppModule de ekli olduğu için istediğimiz yerde kullanabiliyoruz
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  toggleLogin() {
    //Servis tarafında login ve logout işlemi yapan metodumuz
    this.userService.login();
  }

}
