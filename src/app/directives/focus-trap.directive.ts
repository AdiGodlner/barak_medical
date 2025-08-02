import {   Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective {



  @Input('appFocusTrap') isActive = true;

  private focusableElements: HTMLElement[] = [];
  private observer: MutationObserver | null = null;


  constructor(private elementRef: ElementRef<HTMLElement>) {
    console.log("in constractor");
   }


  ngOnInit(): void {
    this.updateFocusableElements();

    // Watch for DOM changes (e.g., submenus opening/closing)
    this.observer = new MutationObserver(() => this.updateFocusableElements());
    this.observer.observe(this.elementRef.nativeElement, {
      childList: true,
      subtree: true
    });

  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    console.log("on keydown");
    if (!this.isActive || event.key !== 'Tab') return;
    console.log("key down tab");
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
  }



}
