import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})



export class NavbarComponent {
  
  isMainMenuOpen : boolean = false;
  isSubMenuOpen : boolean = false;

  toggleMenu() {

    //  TODO add overlay so if user click of menu menu closes

    this.isMainMenuOpen = !this.isMainMenuOpen;
    
    if ( !this.isMainMenuOpen ) {
      this.isSubMenuOpen = false;
    }

  }

  toggleSubMenuOpen() {
    
    this.isSubMenuOpen = !this.isSubMenuOpen;

  }

  closeMenus(){
    
    this.isSubMenuOpen = false ;
    this.isMainMenuOpen = false;

  }

}
