import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../../services/seo.service';
import { SeoData } from '../../../../models/seo.model';

@Component({
  selector: 'app-military-medicine',
  imports: [],
  templateUrl: './military-medicine.component.html',
  styleUrl: './military-medicine.component.scss'
})
export default class MilitaryMedicineComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "רפואה צבאית",
        description: "רפואה צבאית",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



    
}
