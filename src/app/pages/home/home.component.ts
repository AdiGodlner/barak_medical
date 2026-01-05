import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
import { CardsContainerSection } from '../../models/page-data';
import { additionalCardsList, occupationalCardsList } from '../../data/cards.data';
import { CardsContainerComponent } from "../../components/cards-container/cards-container.component";


@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    WhoWeAreComponent,
    CardsContainerComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{


  additionalCardsData: CardsContainerSection = {
    "type":"cards-container",
    "h2" :"רפואה תעסוקתית",
    "cards": additionalCardsList
  }

  occupationalCardsData: CardsContainerSection = {
    "type":"cards-container",
    "h2" :"תחומי עיסוק",
    "cards": occupationalCardsList
  }

    constructor(private seo: SeoService){
      
    }
  
  
    ngOnInit(): void {
  
      const pageSeo : SeoData ={
        title: "מרפאה לרפואה תעסוקתית",
        description: "מרפאה לרפואה תעסוקתית",
      };
  
      this.seo.updateSeoPageData(pageSeo);
  
    }



}
