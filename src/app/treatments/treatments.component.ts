import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-treatments',
  imports: [],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.scss'
})
export class TreatmentsComponent {


  constructor(private  meta:Meta, private titleService:Title){

    this.titleService.setTitle('Treatments Barak Medical');

  }

}
