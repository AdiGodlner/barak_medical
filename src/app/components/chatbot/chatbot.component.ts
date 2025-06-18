import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {

  
  isChatOpen : boolean = false;
  messages : string[] = [];


  toggleChat() : void {
    
    this.isChatOpen = !this.isChatOpen;

  }

}
