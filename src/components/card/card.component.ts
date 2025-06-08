import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

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


}
