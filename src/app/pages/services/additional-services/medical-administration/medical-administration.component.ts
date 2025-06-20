import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../../services/seo.service';
import { SeoData } from '../../../../models/seo.model';

@Component({
  selector: 'app-medical-administration',
  imports: [],
  templateUrl: './medical-administration.component.html',
  styleUrl: './medical-administration.component.scss'
})
export default class MedicalAdministrationComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "מיצויי זכויות רפואיות",
        description: "מיצויי זכויות רפואיות",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



    

  
}
