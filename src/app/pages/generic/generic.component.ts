import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-generic',
  standalone:true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.scss'
})
export default class GenericComponent implements OnInit{

  slug:string = "";
  error:boolean = false;
  pageData:any = null;


  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(SeoService);
  private http = inject(HttpClient)
  private platformId = inject(PLATFORM_ID);
  
    ngOnInit(): void {
  
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    console.log(this.slug);

    this.loadPageData(this.slug);

    const pageSeo : SeoData ={
      title: this.slug,
      description: this.slug,
    };

    this.seo.updateSeoPageData(pageSeo);
  
    }

    async loadPageData(slug: string) {
      try {

        let data: any;

        if (isPlatformBrowser(this.platformId)) {
          // ✅ Works in browser
          console.log("loading from browser");
          console.log(this.pageData);

          if(!this.pageData){
    
            data = await firstValueFrom(this.http.get(`/assets/content/${slug}.json`));
            this.pageData = data;
            console.log('Loaded data:', this.pageData);

          }
          
        } else {
          console.log("prerendering");
          // ✅ Works during prerender (SSR/SSG)
          const fs = await import('fs');
          const path = await import('path');
          const { fileURLToPath } = await import('url');

          const __dirname = path.dirname(fileURLToPath(import.meta.url));
          const projectRoot = path.resolve(__dirname, '../../..');
          const filePath = path.join(projectRoot, 'dist/cloudflare/browser/assets/content', `${slug}.json`);
          console.log('Reading file from:', filePath); // ✅ to verify
          const file = fs.readFileSync(filePath, 'utf-8');
          data = JSON.parse(file);
          this.pageData = data;
          console.log('Loaded data:', this.pageData);

        }

      
      } catch (err) {
        this.error = true;
        console.error('Failed to load page data:', err);

        if (isPlatformBrowser(this.platformId)) {
          this.router.navigate(['/']);
        }
      }
    }


}
