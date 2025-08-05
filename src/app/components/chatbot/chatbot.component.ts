import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatMessage,
  ChatResponse,
  ResponseId,
  MessageSender, 
  ChatMessagesButton,
  // ButtonType
} from '../../models/chat-message.model';

@Component({
  selector: 'app-chatbot',
  imports: [ReactiveFormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})

export class ChatbotComponent {

  isChatOpen : boolean = false;
  messages : ChatMessage[] = [];


  clinicHoursBtn : ChatMessagesButton = {
  
    text : "שעות פעילות" ,
    // type : ButtonType.Response,
    responseId : ResponseId.ClinicHours
  
  }

  servicesBtn: ChatMessagesButton = {
  
    text : "אילו שירותים" ,
    // type : ButtonType.Response,
    responseId : ResponseId.ServicesOffered
  
  }

  welcomeResponse : ChatResponse = {

    id : ResponseId.Welcome,
    isDeadEnd : false,
    messages :[
      {
        from : MessageSender.Bot,
        text : "שלום במה אוכל לעזור לך?",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : " בחר נושא  ",
        messageButtons : [ this.servicesBtn, 
          this.clinicHoursBtn 
        ]
      }

    ]

  };

  repeatQuestionResponse : ChatResponse = {

    id : ResponseId.Repeat,
    isDeadEnd : false,
    messages :[
      {
        from : MessageSender.Bot,
        text : " בחר נושא  ",
        messageButtons : [ this.servicesBtn, 
          this.clinicHoursBtn 
        ]
      }

    ]

  } 

  servicesResponse : ChatResponse = {

    id : ResponseId.ServicesOffered,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "אילו שירותים מציע ברקמדיקל ?",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : " תשובה כלשהיא .... ",
        messageButtons : [ this.servicesBtn, 
          this.clinicHoursBtn 
        ]
      }

    ]

  };

  clinicHoursResponse : ChatResponse = {

    id : ResponseId.ClinicHours,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "מתי פתוחה המרפאה ",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : " שעות פעילות ... ",
        messageButtons : []

      }

    ]

  };

  responseOptions : ChatResponse[] =[

    this.welcomeResponse,
    this.repeatQuestionResponse,
    this.servicesResponse,
    this.clinicHoursResponse

  ] 

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

    console.log(`responseID : ${responseId} `);
    const possibleResponse = this.responseOptions.filter(option => option.id === responseId);
    
    if( !possibleResponse ){
      
      console.warn(`no matching response for responseId ${responseId}`);
      return;

    }

    const response = possibleResponse[0];
    response.messages.forEach(message => {
      
      this.messages.push(message);
      if(message.messageButtons){
        message.messageButtons.forEach( btn => {

          console.log(btn.text);

        })
      }

    });


  }

}
