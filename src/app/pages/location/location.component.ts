import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  imports: [
    CommonModule,
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
