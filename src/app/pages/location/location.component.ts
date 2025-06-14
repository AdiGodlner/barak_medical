import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  imports: [
    GoogleMap,
    MapInfoWindow,
    MapMarker
],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {


  constructor(private  meta:Meta, private titleService:Title){

    this.titleService.setTitle('Location Barak Medical');

  }

}
