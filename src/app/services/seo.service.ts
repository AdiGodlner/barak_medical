import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { SeoData } from '../models/seo.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  clinicName :string = "י.ד ברק מדיקל";
  location :string = "קריית אונו";
  titleSuffix:string = `${this.clinicName} | ${this.location}`;

  constructor(private title: Title, private meta: Meta) {

   }
  // note this look silly now to have a such a simple function 
  // but its just the begging I will expand this later
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
  }



}
