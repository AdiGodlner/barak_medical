import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Card } from '../../models/cards';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() card!:Card

  constructor(private router: Router) {

  }

  goTo() {
    this.router.navigateByUrl(this.card.routeTo);
  }

}
