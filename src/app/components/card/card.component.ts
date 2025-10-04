import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() imageUrl = '';
  @Input() title = '';
  @Input() description = '';
  @Input() routeTo = ''; 


  constructor(private router: Router) {}

  goTo() {
    console.log("go to ");
    this.router.navigateByUrl(this.routeTo);
  }

}
