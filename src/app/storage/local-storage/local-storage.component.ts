import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit {

  constructor() { }

  name: string = ""; //Two way binding yapılacak değişken oluşturuldu
  localStorageValue = ""; //Local Storage den aldığımız datayı atayacağımız değişkeni oluşturduk
  localStorageObjectValue; //Local Storage den gelen objemizi kayıt edeceğimiz property


  //localStorage e obje kaydetme
  objName = "";
  objSurname = "";



  ngOnInit(): void {
  }

  setItem(value) {
    //Local Storage e data eklerken key value ikilisi şeklinde kaydediriz
    localStorage.setItem("name", value);
  }

  getItem() {
    //Local Storageden data alırken key değeri ile erişim sağlarız
    this.localStorageValue = localStorage.getItem("name");
  }

  clearItem() {
    //Belli bir key e ait datayı sileriz
    localStorage.removeItem("name");
  }

  clearAll() {
    //Bütün local storage yi temizleriz
    localStorage.clear();
  }

  //Object Set
  setObject() {
    //Propertylerimiz ile objemizi oluşturduk
    const obj = {
      name: this.objName,
      surname: this.objSurname
    };

    localStorage.setItem("object", JSON.stringify(obj));

  }

  //Object Get
  getObject() {
    //object key bilgisi ile local storage kayıt ettiğimiz objeyi almış bulunmaktayız
    this.localStorageObjectValue=localStorage.getItem("object");
  }

}
