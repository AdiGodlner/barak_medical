import { Component, OnInit } from '@angular/core';
import { SeoData } from '../../../../models/seo.model';
import { SeoService } from '../../../../services/seo.service';

@Component({
  selector: 'app-industry-consulting',
  imports: [],
  templateUrl: './industry-consulting.component.html',
  styleUrl: './industry-consulting.component.scss'
})
export default class IndustryConsultingComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "ייעוץ לגופים גדולים",
        description: "ייעוץ לגופים גדולים",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



}
