import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  ChangeDetectorRef
} from '@angular/core';
import { RouterModule } from '@angular/router';


interface NavLink {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-navbar',
  imports: [
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @ViewChild('navList') navListRef!: ElementRef<HTMLElement>;
  @ViewChildren('navItem') navItems!: QueryList<ElementRef<HTMLElement>>;


  navLinks: NavLink[] = [
    { label: 'דף הבית', routerLink: '/' },
    { label: 'אודות', routerLink: '/about' },
    { label: 'סוגי רפואה', routerLink: '/treatments' },
    { label: 'איך מגיעים', routerLink: '/location'  },
    { label: 'english', routerLink: 'http://localhost:4201'  },

  ];


  isMobileMode = false;
  private resizeObserver!: ResizeObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.setupResizeObserver();
    this.cdr.detectChanges();
  }

  private setupResizeObserver(): void {
    if (!window.ResizeObserver) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.checkIfShouldCollapse();
    });

    this.resizeObserver.observe(this.navListRef.nativeElement);
  }

  private checkIfShouldCollapse(): void {
    const navList = this.navListRef.nativeElement;
    const totalItemWidth = this.navItems.reduce((sum, el) => {
      return sum + el.nativeElement.offsetWidth;
    }, 0);

    this.isMobileMode = totalItemWidth > navList.offsetWidth;
    this.cdr.markForCheck();
  }

  toggleMobileMenu(): void {
    // Toggle the mobile nav menu visibility
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
