import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';

@Component({
  selector: 'app-accessibility',
  imports: [],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.scss'
})
export class AccessibilityComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "הצהרת נגישות",
        description: "הצהרת נגישות",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



    
}
