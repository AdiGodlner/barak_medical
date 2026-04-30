import {
  Directive,
  ElementRef,
  Renderer2,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  Input
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[detectWrapParent]'
})
export class DetectWrapParentDirective implements AfterViewInit {
  @Input('detectWrapParent') parentClass!: string;
  private observer!: ResizeObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement;

    // Observe height changes
    this.observer = new ResizeObserver(() => {

      const style = getComputedStyle(element);
      const fontSize = parseFloat(style.fontSize);
      const wrapped = element.offsetHeight > fontSize *2;

      const parent = this.findParentWithClass(element, this.parentClass);
      if (!parent) return;

      if (wrapped) {
        this.renderer.addClass(parent, 'wrapped');
      } else {
        this.renderer.removeClass(parent, 'wrapped');
      }
    });

    this.observer.observe(element);
  }

  private findParentWithClass(el: HTMLElement, className: string): HTMLElement | null {
    let parent = el.parentElement;
    while (parent) {
      if (parent.classList.contains(className)) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
}
