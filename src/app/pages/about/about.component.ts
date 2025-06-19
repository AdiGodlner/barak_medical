import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "אודותינו",
        description: "אודותינו",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



    

}
