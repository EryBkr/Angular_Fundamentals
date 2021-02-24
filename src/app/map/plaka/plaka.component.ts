import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/lib/services/map.service';

@Component({
  selector: 'app-plaka',
  templateUrl: './plaka.component.html',
  styleUrls: ['./plaka.component.scss']
})
export class PlakaComponent implements OnInit {

  plakaDatas;

  constructor(private mapService:MapService) {
     //cityPlakaSubject in her değişikliği citiesData üzerinden anlık değişiklik sağlayacaktır
     mapService.cityPlakaSubject.subscribe(data=>{
      this.plakaDatas=data;
    });
   }

  ngOnInit(): void {
    this.mapService.getPlakas();
  }

}
