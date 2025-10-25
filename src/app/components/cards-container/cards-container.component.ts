import { Component, Input} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardsContainerSection } from '../../models/page-data';

@Component({
  selector: 'app-cards-container',
  imports: [CardComponent],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss'
})
export class CardsContainerComponent {

  @Input() cardsContainerData !:CardsContainerSection;

}
