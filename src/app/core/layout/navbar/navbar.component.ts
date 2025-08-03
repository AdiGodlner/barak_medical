import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickedOutsideDirective } from '../../../directives/clicked-outside.directive';
import { FocusTrapDirective } from '../../../directives/focus-trap.directive';
@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [
    RouterModule,
    ClickedOutsideDirective,
    FocusTrapDirective
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})



export class NavbarComponent  implements OnInit, OnDestroy{
  
  isMainMenuOpen : boolean = false;
  isSubMenu1Open : boolean = false;
  isSubMenu2Open : boolean = false;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

    private handleResize = (): void => {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth > 1048 && this.isMainMenuOpen) {
        this.closeMenus();
      }
    }
  };

  openMenu() {

    //  TODO add overlay so if user click of menu menu closes
    this.isMainMenuOpen = true;
    
  }

  closeMenu(){

    this.isMainMenuOpen = false;

    this.isSubMenu1Open = false;
    this.isSubMenu2Open = false;

  }


  // TODO open and close submenus by id with a name not a number
  toggleSubMenuOpen(id: number) {
    
    if(id === 1){
      this.isSubMenu1Open = !this.isSubMenu1Open;
    }else {
      this.isSubMenu2Open = !this.isSubMenu2Open;
    }
    

  }

  onOutsideClick(id: number) {
  
      console.log("closing submenu " + id);
    
    
    if(id === 1){

      console.log("closing submenu 1");
      this.isSubMenu1Open = false;
    }else {

        console.log("closing submenu 2");
        this.isSubMenu2Open = false;

    }
    

}


  closeMenus(){
    
    this.isSubMenu1Open = false;
    this.isSubMenu2Open = false;
    this.isMainMenuOpen = false;

  }

}
