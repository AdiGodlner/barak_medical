import { Component, OnInit } from '@angular/core';
import { SeoData } from '../../../../models/seo.model';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-diving-medicine',
  imports: [],
  templateUrl: './diving-medicine.component.html',
  styleUrl: './diving-medicine.component.scss'
})
export default class DivingMedicineComponent implements OnInit{


    constructor(private seo: SeoService){

    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "רפואת צלילה",
        description: "רפואת צלילה",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



    
  
}
