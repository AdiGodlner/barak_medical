import {   Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit , 
  Inject,
  PLATFORM_ID, 
  SimpleChanges} from '@angular/core';
  import { isPlatformBrowser } from '@angular/common';
import e from 'express';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective {



  @Input('appFocusTrap') isActive = true;

  private focusableElements: HTMLElement[] = [];
  private observer?: MutationObserver;
  private previouslyFocusedElement: HTMLElement | null = null;
  private originalTabIndices = new Map<HTMLElement, string | null>();

  private handleResize = (): void => {
    if (isPlatformBrowser(this.platformId)) {
      this.syncTabIndexState();
    }
  };


  constructor( private elementRef: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object) {
   }


  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      this.updateFocusableElements();
      // Watch for DOM changes (e.g., submenus opening/closing)
      this.observer = new MutationObserver(() => this.updateFocusableElements());
      this.observer.observe(this.elementRef.nativeElement, {
        childList: true,
        subtree: true
      });

      window.addEventListener('resize', this.handleResize);
    
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if ('isActive' in changes) {
      const current = changes['isActive'].currentValue;
      const previous = changes['isActive'].previousValue;

      if (current && !previous) {
        // Just activated
        this.previouslyFocusedElement = document.activeElement as HTMLElement;
        this.updateFocusableElements();
        this.focusFirstElement();
      } else if (!current && previous) {
        // Just deactivated
        this.observer?.disconnect();
        if (this.previouslyFocusedElement) {
          this.previouslyFocusedElement.focus();
        }

        this.updateFocusableElements(); // << this fixes it

      } else {
       this.updateFocusableElements(); // safety fallback
      }

    }


  }

  private focusFirstElement(): void {
    const first = this.focusableElements[0];
    if (first) {
      first.focus();
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();

    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.handleResize);
    }

  }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {

    if (!this.isActive || event.key !== 'Tab') return;
    
    this.updateFocusableElements();

    const { activeElement } = document;
    const first = this.focusableElements[0];
    const last = this.focusableElements[this.focusableElements.length - 1];

    if (event.shiftKey) {
      // Shift + Tab
      if (activeElement === first || !this.elementRef.nativeElement.contains(activeElement)) {
        event.preventDefault();
        last.focus();
      }
    } else {
      // Tab
      if (activeElement === last || !this.elementRef.nativeElement.contains(activeElement)) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  private updateFocusableElements(): void {
    const focusableSelectors = [
      'a[href]:not([disabled])',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input[type="text"]:not([disabled])',
      'input[type="radio"]:not([disabled])',
      'input[type="checkbox"]:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');

    const root = this.elementRef.nativeElement;
    this.focusableElements = Array.from(root.querySelectorAll<HTMLElement>(focusableSelectors))
      .filter(el => el.offsetParent !== null); // visible elements only
  
    
    this.focusableElements.forEach(el => {
      if (!this.originalTabIndices.has(el)) {
        this.originalTabIndices.set(el, el.getAttribute('tabindex'));
      }
    });

    this.syncTabIndexState();

  }
    

  private syncTabIndexState(): void {

    if (!isPlatformBrowser(this.platformId)) return;
    
    const isSmallScreen = window.innerWidth <= 1048;

    this.focusableElements.forEach(el => {
    
    
    if (!this.isActive && isSmallScreen) {

      el.setAttribute('tabindex', '-1');

    } else {
      
      const original = this.originalTabIndices.get(el);

      if (original !== null && original !== undefined) {
        el.setAttribute('tabindex', original);
      } else {
        el.removeAttribute('tabindex');
      }
    }
  });
}


}
