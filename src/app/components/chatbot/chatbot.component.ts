import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ChatMessage } from '../../models/chat-message.model';
@Component({
  selector: 'app-chatbot',
  imports: [ReactiveFormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {

  isChatOpen : boolean = false;
  messages : ChatMessage[] = [];
  applyForm = new FormGroup({
    message : new FormControl("")
  });

  close():void {
    this.isChatOpen = false;
  }

  open():void{
    this.isChatOpen = true;
  }

    sendMessage(){

      const user_msg = (this.applyForm.value.message ?? '').trim();

      if(user_msg !== ''){
        const message : ChatMessage = {
          from: "user",
          text: user_msg
        }
      
        this.messages.push(message);
      
        const botMessage : ChatMessage = {
          from: "bot",
          text: "some text"
        }
      
        this.messages.push(botMessage);
      
      }
      
      this.applyForm.reset();
    
    }

}
