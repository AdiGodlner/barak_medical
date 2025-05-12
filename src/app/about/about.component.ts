import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {



  constructor(private meta: Meta, private titleService: Title) {

    this.titleService.setTitle('About Barak Medical');

  }

}
