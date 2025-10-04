import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }

  private callUs$ = new Subject<void>();

  // Observable the chatbot listens to
  triggerCallUs$ = this.callUs$.asObservable();

  triggerCallUs() {
    this.callUs$.next();
  }

}
