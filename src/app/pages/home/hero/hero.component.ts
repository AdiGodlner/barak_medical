import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatbotService } from '../../../services/chatbot.service';

@Component({
  selector: 'app-hero',
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  
  constructor(private chatBotService:ChatbotService){}

  callUs(){
    this.chatBotService.triggerCallUs();
  }

}
