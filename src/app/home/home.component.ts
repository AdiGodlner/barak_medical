import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AdditionalTreatmentsComponent } from './treatment-cards/additional-treatments/additional-treatments.component';
import { OccupationalMedicineComponent } from './treatment-cards/occupational-medicine/occupational-medicine.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { TestingGroundComponent } from '../testing-ground/testing-ground.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    WhoWeAreComponent,
    TestingGroundComponent,
    AdditionalTreatmentsComponent,
    OccupationalMedicineComponent,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private meta: Meta, private titleService: Title) {

    this.updateMetaTags() 

  }


  updateMetaTags() {
    // TODO add a method like this to all pages 
    this.titleService.setTitle('Home - Barak Medical');

    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Welcome to the home page of your Angular app.' });
    this.meta.addTag({ name: 'keywords', content: 'Angular, SEO, JavaScript' });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'Your Angular App - Home' });
    this.meta.addTag({ property: 'og:description', content: 'Welcome to the home page of your Angular app.' });
    this.meta.addTag({ property: 'og:image', content: 'path/to/your/image.png' });
  }

}
