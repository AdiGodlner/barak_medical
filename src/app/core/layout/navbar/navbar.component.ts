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
  
  
  
  isMenuOpen:boolean = false;
  isDropdownOpen: boolean = false;

  toggleMenu() {

    this.isMenuOpen = !this.isMenuOpen;
    
    if (!this.isMenuOpen) {
      this.isDropdownOpen = false;
    }

  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  closeMenu() {
    this.isMenuOpen = false;
  }

  




}
