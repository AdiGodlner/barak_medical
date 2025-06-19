import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../../services/seo.service';
import { SeoData } from '../../../../models/seo.model';

@Component({
  selector: 'app-medical-rights',
  imports: [],
  templateUrl: './medical-rights.component.html',
  styleUrl: './medical-rights.component.scss'
})
export class MedicalRightsComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "מיצוי זכויות רפואיות",
        description: "מיצוי זכויות רפואיות",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }
  

}
