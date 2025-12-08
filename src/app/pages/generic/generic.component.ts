import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
import { CommonModule} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { pageDataMap } from '../../data/page.data';
import { CardsContainerComponent } from '../../components/cards-container/cards-container.component';
import { PageData } from '../../models/page-data';
import { DetectWrapParentDirective } from '../../directives/detect-wrap-parent.directive';

@Component({
  selector: 'app-generic',
  standalone:true,
  imports: [CommonModule, CardsContainerComponent, DetectWrapParentDirective],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.scss'
})
export default class GenericComponent implements OnInit {

  slug:string = "";
  pageData:PageData | null = null;


  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(SeoService);
  
    ngOnInit(): void {
  
      this.route.paramMap.subscribe(params => {
        const newSlug = params.get('slug') ?? '';

        if (newSlug !== this.slug) {
          this.slug = newSlug;
          this.pageData = pageDataMap[newSlug];

          if (!this.pageData) {
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
