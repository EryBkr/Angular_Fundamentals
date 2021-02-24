import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

//Ekleme işlemi için model oluşturduk
interface city{
  id:number,
  name:string,
  plaka:number,
  region:string
}

//ng g service serviceName ile servisimizi oluşturduk
@Injectable({
  providedIn: 'root'
})
export class MapService {

  cities=[
    {
      id:1,
      name:"İstanbul",
      region:"Marmara",
      plaka:34
    },
    {
      id:2,
      name:"Eskişehir",
      region:"Ege",
      plaka:26
    },
    {
      id:3,
      name:"Ankara",
      region:"İç Anadolu",
      plaka:6
    }
  ];

  //Subscribe olabileceğimiz data tiplerini tanımladık.
  //Böylelikle diğer componentler de data değişikliklerini anlık olarak gösterebilecek
  public cityNameSubject=new Subject<any>();
  public cityPlakaSubject=new Subject<any>();
  public cityRegionSubject=new Subject<any>();

  constructor() { }

  //Şehirler dizimizin id ve name değerlerini dönen fonksiyon
  getCityName(){
    const data= this.cities.map(elem=>({
      id:elem.id,
      name:elem.name
    }));

    this.cityNameSubject.next(data);
  }

  //Şehirler dizimizin id,plaka ve name değerlerini dönen fonksiyon
  getPlakas(){
    const data= this.cities.map(elem=>({
      id:elem.id,
      plaka:elem.plaka,
      name:elem.name
    }));

    this.cityPlakaSubject.next(data);
  }

   //Şehirler dizimizin id,bölge ve name değerlerini dönen fonksiyon
  getRegions(){
    const data= this.cities.map(elem=>({
      id:elem.id,
      name:elem.name,
      region:elem.region
    }));

    this.cityRegionSubject.next(data);
  }

  //Şehir kaydet ya da güncelle
  save(value:city){
    const index=this.cities.findIndex(el=>el.id===value.id);

    if(index>-1){
      this.cities[index]=value;
    }
    else{
      this.cities.push(value);
    }

    //Değişikliklerin componentlere anlık olarak yansıması için save metodundan sonra tekrar çağırdık
    this.getCityName();
    this.getPlakas();
    this.getRegions();


  }
}
