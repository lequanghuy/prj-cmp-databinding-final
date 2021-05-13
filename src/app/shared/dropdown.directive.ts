import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:click', ['$event']) onClick(event: Event) {
    // debugger
    // if(!this.elRef.nativeElement.classList.contains('open')) {
    //   this.renderer.addClass(this.elRef, 'open');
    // }
    // else {
    //   this.renderer.removeClass(this.elRef, 'open');
    // }

    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;

  }

}
