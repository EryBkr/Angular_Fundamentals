import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/lib/services/map.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  citiesData;

  //DI ile servisimizi ekledik
  constructor(private mapService:MapService) {
    //CityNameSubject in her değişikliği citiesData üzerinden anlık değişiklik sağlayacaktır
    mapService.cityNameSubject.subscribe(data=>{
      this.citiesData=data;
    });
   }

  ngOnInit(): void {
    //Servisimiz ile property mizi dolduruyoruz
    this.mapService.getCityName();
  }

}
