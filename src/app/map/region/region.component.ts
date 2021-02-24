import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/lib/services/map.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  regionDatas;

  constructor(private mapService:MapService) {
     //cityRegionSubject in her değişikliği citiesData üzerinden anlık değişiklik sağlayacaktır
     mapService.cityRegionSubject.subscribe(data=>{
      this.regionDatas=data;
    });
   }

  ngOnInit(): void {
    this.mapService.getRegions();
  }

}
