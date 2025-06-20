import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
// import { GoogleMapsWraperComponent } from '../../components/google-maps-wraper/google-maps-wraper.component';

@Component({
  selector: 'app-location',
  imports: [ 
    // GoogleMapsWraperComponent
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export default class LocationComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "מיקומינו",
        description: "מיקומינו",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



    

}
