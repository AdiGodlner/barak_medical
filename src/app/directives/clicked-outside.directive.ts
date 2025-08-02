import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appClickedOutside]'
})
export class ClickedOutsideDirective {

  @Output() outsideEmitter = new EventEmitter<Event>();
  constructor(private elementRef: ElementRef) { }
  @Input() isListening = true;

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {

    if(!this.isListening) return ;
    
    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.outsideEmitter.emit(event);
    }

  }

}
