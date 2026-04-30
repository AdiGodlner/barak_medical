import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { SeoData } from '../models/seo.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  clinicName :string = "ברק מדיקל";
  location :string = "קריית אונו";
  titleSuffix:string = `${this.clinicName} | ${this.location}`;


  
  constructor(private title: Title, private meta: Meta) {

<<<<<<< HEAD
   }


  private updateTitle(title: string): void {
    
    this.title.setTitle(`${title} | ${this.titleSuffix}`);
  
  }

  private updateMeta(desc: string): void {
    
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  }

  updateSeoPageData(data: SeoData): void {
    this.updateTitle(data.title);
    this.updateMeta(data.description);

=======
  }

  updateSeoPageData(data: SeoData): void {
    // 1. Title
    this.title.setTitle(`${data.title} | ${this.titleSuffix}`);

    // 2. Standard Meta
    this.meta.updateTag({ name: 'description', content: data.description });
    
    // 3. Open Graph (WhatsApp/FB)
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: data.image || 'assets/default-clinic-share.jpg' });
    this.meta.updateTag({ property: 'og:url', content: `https://barakmedical.com${data.url}` });
    
    // 4. Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
>>>>>>> 569a741 (temp)
  }


}
