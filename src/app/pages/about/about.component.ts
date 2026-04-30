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
          title: 'המומחים שלנו', // Short and sweet
          description: 'הכירו את המומחים של ברק מדיקל בקריית אונו: ד״ר דריה לוי-ברק וד״ר יאיר ברק, מומחים ברפואה תעסוקתית עם ניסיון עשיר במערכת הבריאות ובצה״ל.',
          url: '/about',
          type: 'article'
      };
  
      
      this.seo.updateSeoPageData(pageSeo);
  
    }



    

}
