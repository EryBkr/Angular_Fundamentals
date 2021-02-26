import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angTutorial';

  //DI ile servislerimizi ekliyoruz
  constructor(private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public translateService: TranslateService) {
    //Proje çalışır çalışmaz dil ataması yapabiliriz
    translateService.setDefaultLang("en");
    translateService.use("en");
  }

  showSuccess() {
    //Gerekli Translate mesajını ilettik
this.translateService.onLangChange.subscribe(response=>{
  const message=this.translateService.instant("toastr.message");
  this.toastr.success('Hello world!', message);
});


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

  //Navbardan seçilen değer alındı
  setLanguage(lang: string) {
    this.translateService.use(lang);
  }


}
