import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatMessage,
  ChatResponse,
  ResponseId,
  MessageSender, 
  ChatMessagesButton,
  // ButtonType
} from '../../models/chat-message.model';

import { Subscription } from 'rxjs';
import { ChatbotService } from '../../services/chatbot.service';
import { responseOptions } from '../../data/chat.data';

@Component({
  selector: 'app-chatbot',
  imports: [ReactiveFormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})

export class ChatbotComponent implements OnInit, OnDestroy {

  isChatOpen : boolean = false;
  messages : ChatMessage[] = [];
  
  private sub!: Subscription;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    this.sub = this.chatbotService.triggerCallUs$.subscribe(() => {
      this.open();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  close():void {
    this.isChatOpen = false;
  }

  open():void{
    this.isChatOpen = true;
    
    if(this.messages.length == 0 ){
      this.handleOnButtonClick(ResponseId.Welcome);
    }

  }

  handleOnButtonClick(responseId:ResponseId){

    const possibleResponse = responseOptions.filter(option => option.id === responseId);
    
    if( !possibleResponse ){
      
      console.warn(`no matching response for responseId ${responseId}`);
      return;

    }

    const response = possibleResponse[0];
    response.messages.forEach(message => {
      
      this.messages.push(message);


    });


  }

}
