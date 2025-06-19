import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AdditionalTreatmentsComponent } from './treatment-cards/additional-treatments/additional-treatments.component';
import { OccupationalMedicineComponent } from './treatment-cards/occupational-medicine/occupational-medicine.component';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';


@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AdditionalTreatmentsComponent,
    OccupationalMedicineComponent,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "מרפאה לרפואה תעסוקתית",
        description: "מרפאה לרפואה תעסוקתית",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



}
