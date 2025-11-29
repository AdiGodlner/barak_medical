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
  private oneLineHeight = 0;

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

      console.log("inside observer");
      const style = getComputedStyle(element);
      const fontSize = parseFloat(style.fontSize);
      console.log("fontsize ", fontSize *2, "element.offsetHeight", element.offsetHeight);
      const wrapped = element.offsetHeight > fontSize *2;
      console.log(wrapped);

      const parent = this.findParentWithClass(element, this.parentClass);
      if (!parent) return;

      if (wrapped) {
        console.log("wraped");
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
