import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from '../../../../services/seo.service';
import { SeoData } from '../../../../models/seo.model';

@Component({
  selector: 'app-work-ability',
  imports: [],
  templateUrl: './work-ability.component.html',
  styleUrl: './work-ability.component.scss'
})
export default class WorkAbilityComponent implements OnInit{


  constructor(private seo: SeoService){
    

  }


  ngOnInit(): void {

    const pageSeo : SeoData ={
      title: "כושר עבודה",
      description: "בדיקת כושר עבודה",
    };

    this.seo.updateSeoPageData(pageSeo);

  }


}
