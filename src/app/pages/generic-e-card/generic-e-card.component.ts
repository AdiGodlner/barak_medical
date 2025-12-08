import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
import { CommonModule} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ECard } from '../../models/e-card';
import { ECardDataMap } from '../../data/e-card.data';

@Component({
  selector: 'app-generic-e-card',
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './generic-e-card.component.html',
  styleUrl: './generic-e-card.component.scss'
})
export default class GenericECardComponent implements OnInit{

  slug:string = "";
  ECardData:ECard | null = null;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(SeoService);
  
    ngOnInit(): void {
  
      this.route.paramMap.subscribe(params => {
        const newSlug = params.get('slug') ?? '';

        if (newSlug !== this.slug) {
          this.slug = newSlug;
          console.log(ECardDataMap);
          console.log(newSlug);
          this.ECardData = ECardDataMap[newSlug];

          if (!this.ECardData) {
            this.router.navigate(['/']);
            return;
          }

          const pageSeo: SeoData = {
            //TODO change slug to relevent data from pageData !?
            title: this.slug,
            description: this.slug,
          };
          this.seo.updateSeoPageData(pageSeo);
        }
      });
    }



}
