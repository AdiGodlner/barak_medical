import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../../services/seo.service';
import { SeoData } from '../../../../models/seo.model';

@Component({
  selector: 'app-causal-link-assessment',
  imports: [],
  templateUrl: './causal-link-assessment.component.html',
  styleUrl: './causal-link-assessment.component.scss'
})
export class CausalLinkAssessmentComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "קביעת קשר סיבתי ",
        description: "קביעת קשר סיבתי ",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }


}
