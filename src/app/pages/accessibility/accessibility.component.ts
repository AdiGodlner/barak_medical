import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';

@Component({
  selector: 'app-accessibility',
  imports: [],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.scss'
})
export default class AccessibilityComponent implements OnInit{


    constructor(private seo: SeoService){
      
    }
  
  
ngOnInit(): void {

  const pageSeo: SeoData = {
    title: 'הצהרת נגישות',
    description: 'ברק מדיקל מחויבת למתן שירות נגיש ושוויוני. כאן תוכלו למצוא מידע על נגישות האתר בהתאם לתקן WCAG 2.0 ועל הסדרי הנגישות הפיזיים במרפאה בקריית אונו.',
    url: '/accessibility-statement',
    type: 'article'
  };

  this.seo.updateSeoPageData(pageSeo);

}



    
}
