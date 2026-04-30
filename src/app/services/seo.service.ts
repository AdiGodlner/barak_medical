import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { SeoData, DEFAULT_SEO } from '../models/seo.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly clinicName: string = "ברק מדיקל";
  private readonly location: string = "קריית אונו";
  private readonly titleSuffix: string = `${this.clinicName} | ${this.location}`;
  private readonly baseUrl: string = "https://barakmedical.com"; // Change to your actual domain

  constructor(
    private title: Title, 
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  /**
   * Main entry point for updating SEO per page
   */
  updateSeoPageData(data: SeoData): void {
    const seoTitle = data.title ? `${data.title} | ${this.titleSuffix}` : this.titleSuffix;
    const seoDesc = data.description || DEFAULT_SEO.description;
    const seoImage = `${this.baseUrl}${data.image || DEFAULT_SEO.image}`;
    const seoUrl = `${this.baseUrl}${data.url || ''}`;

    // 1. Standard Tags
    this.title.setTitle(seoTitle);
    this.meta.updateTag({ name: 'description', content: seoDesc });
    this.meta.updateTag({ name: 'robots', content: data.robots || 'index, follow' });

    // 2. Open Graph / Facebook / WhatsApp
    this.meta.updateTag({ property: 'og:type', content: data.type || 'website' });
    this.meta.updateTag({ property: 'og:title', content: seoTitle });
    this.meta.updateTag({ property: 'og:description', content: seoDesc });
    this.meta.updateTag({ property: 'og:image', content: seoImage });
    this.meta.updateTag({ property: 'og:url', content: seoUrl });

    // 3. Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seoTitle });
    this.meta.updateTag({ name: 'twitter:description', content: seoDesc });
    this.meta.updateTag({ name: 'twitter:image', content: seoImage });

    // 4. Canonical Link
    this.updateCanonicalLink(seoUrl);
  }

  /**
   * Updates the <link rel="canonical"> tag in the head
   */
  private updateCanonicalLink(url: string): void {
    // Try to find an existing canonical link
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    
    if (!link) {
      // If it doesn't exist (first time build or render), create it
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    
    // Set the absolute URL
    link.setAttribute('href', url);
  }


}