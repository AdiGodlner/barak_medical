import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoData } from '../../models/seo.model';
import { CardsContainerSection } from '../../models/page-data';
import { additionalCardsList, occupationalCardsList } from '../../data/cards.data';
import { CardsContainerComponent } from "../../components/cards-container/cards-container.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CardsContainerComponent,
    RouterModule
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

    const pageSeo: SeoData = {
      title: 'רפואה תעסוקתית וחוות דעת',
      description: 'מרכז ברק מדיקל בקריית אונו מספק שירותי רפואה תעסוקתית, חוות דעת מומחה לביטוח לאומי ולבתי משפט, רפואה צבאית, רפואת צלילה ותעופה ע"י ד"ר יאיר ברק וד"ר דריה לוי-ברק.',
      url: '/',
      type: 'website'
    };

  this.seo.updateSeoPageData(pageSeo);

}



}
