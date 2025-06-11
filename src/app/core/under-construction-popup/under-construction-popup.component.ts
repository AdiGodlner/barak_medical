import { Component, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-under-construction-popup',
  imports: [],
  templateUrl: './under-construction-popup.component.html',
  styleUrl: './under-construction-popup.component.scss'
})
export class UnderConstructionPopupComponent {
  

  visible = false;
  
  constructor(){
    
    afterNextRender(() => {
    
      const dismissed = localStorage.getItem('underConstructionDismissed');
      if (!dismissed) {
        this.visible = true;
      }
    
    })

  }

  dismiss(): void {
    
    this.visible = false;
    localStorage.setItem('underConstructionDismissed', 'true');

  }

}
