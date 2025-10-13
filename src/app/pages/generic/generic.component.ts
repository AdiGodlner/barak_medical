import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-generic',
  imports: [CommonModule ],
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

        const res = await fetch(`/assets/${slug}.json`);
        // this.pageData = await res.json();
        // console.log(this.pageData);
      
      } catch (err) {
        this.error = true;
        console.log(err)
      
      }
    }


}
