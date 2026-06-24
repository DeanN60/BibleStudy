import {Directive, HostBinding, HostListener, model} from '@angular/core';

@Directive({
  selector: '[appClickOpen]',
})
export class ClickOpen {
  isOpen = model(false, {alias: 'appClickOpen'});

  @HostBinding('class.is-open') get openClass() {
    return this.isOpen();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    this.isOpen.update(value => !value);
  }
}
