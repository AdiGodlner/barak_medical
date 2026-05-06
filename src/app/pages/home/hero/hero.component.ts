import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatbotService } from '../../../services/chatbot.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [RouterModule, 
    NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  
  constructor(private chatBotService:ChatbotService){}

  callUs(){
    this.chatBotService.triggerCallUs();
  }

}
