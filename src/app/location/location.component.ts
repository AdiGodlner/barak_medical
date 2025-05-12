import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {


  constructor(private  meta:Meta, private titleService:Title){

    this.titleService.setTitle('Location Barak Medical');

  }

}
