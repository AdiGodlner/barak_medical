import { Component, OnInit } from '@angular/core';
import { SeoData } from '../../../../models/seo.model';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-aviation-medicine',
  imports: [],
  templateUrl: './aviation-medicine.component.html',
  styleUrl: './aviation-medicine.component.scss'
})
export class AviationMedicineComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "רפואה תעופתית",
        description: "רפואה תעופתית",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



    
}
