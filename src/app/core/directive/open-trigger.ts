import {Directive, HostBinding, HostListener, signal} from '@angular/core';

@Directive({
  selector: '[appOpenTrigger]',
})
export class OpenTrigger {
  readonly isOpen = signal(false);

  @HostBinding('class.is-open') get openClass() {
    return this.isOpen();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isOpen.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isOpen.set(false);
  }
}
