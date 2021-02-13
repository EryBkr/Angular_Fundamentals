import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angTutorial';

  constructor(private toastr: ToastrService,private spinner: NgxSpinnerService) {} //DI ile servislerimizi ekliyoruz

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');

       /** spinner starts on init */
       this.spinner.show();

       setTimeout(() => {
         /** spinner ends after 5 seconds */
         this.spinner.hide();
       }, 5000);
  }

  ngOnInit(): void { //Component yüklendiği an çalışacak olan metottur. Lifecycle 'ın bir parçasıdır
    this.showSuccess();
  }


}
