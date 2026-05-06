import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ChatbotComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'barak-medical';
}
