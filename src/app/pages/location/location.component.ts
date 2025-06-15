import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import { GoogleMapsWraperComponent } from '../../components/google-maps-wraper/google-maps-wraper.component';

@Component({
  selector: 'app-location',
  imports: [ 
    // GoogleMapsWraperComponent
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {


  constructor(private  meta:Meta, private titleService:Title){

    this.titleService.setTitle('Location Barak Medical');

  }

}
