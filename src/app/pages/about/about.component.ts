import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export default class AboutComponent implements OnInit{


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
