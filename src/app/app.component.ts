import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { UnderConstructionPopupComponent } from './core/under-construction-popup/under-construction-popup.component';
import { ButtomFixdCallUsBannerComponent } from './components/buttom-fixd-call-us-banner/buttom-fixd-call-us-banner.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    UnderConstructionPopupComponent,
    ButtomFixdCallUsBannerComponent,
    ChatbotComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'barak-medical';
}
