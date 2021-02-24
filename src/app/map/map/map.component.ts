import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MapService } from 'src/lib/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private mapService:MapService) { }

  ngOnInit(): void {
  }

  save(form:NgForm){
    //Form inputlarımızın value sini servisimize gönderiyoruz
    //Bu işlemin akabinde sayfa yenilenmeden yeni datalarımızı göremeyeceğiz.
    this.mapService.save(form.value);
  }

}
