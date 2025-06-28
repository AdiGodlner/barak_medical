import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})



export class NavbarComponent {
  
  isMainMenuOpen : boolean = false;
  isSubMenu1Open : boolean = false;
  isSubMenu2Open : boolean = false;

  openMenu() {

    //  TODO add overlay so if user click of menu menu closes
    this.isMainMenuOpen = true;
    
  }

  closeMenu(){

    this.isMainMenuOpen = false;

    this.isSubMenu1Open = false;
    this.isSubMenu2Open = false;

  }

  toggleSubMenuOpen(id: number) {
    
    if(id === 1){
      this.isSubMenu1Open = !this.isSubMenu1Open;
    }else {
      this.isSubMenu2Open = !this.isSubMenu2Open;
    }
    

  }

  closeMenus(){
    
    this.isSubMenu1Open = false;
    this.isSubMenu2Open = false;
    this.isMainMenuOpen = false;

  }

}
