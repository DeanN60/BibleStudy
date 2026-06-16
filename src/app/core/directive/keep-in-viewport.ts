import {Directive, ElementRef, HostListener, inject, Renderer2} from '@angular/core';

@Directive({
  selector: '[appKeepInViewport]',
})
export class KeepInViewport {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.adjustPosition();
  }

  private adjustPosition() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const width = rect.width;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let offsetLeft = this.el.nativeElement.offsetLeft;
    let offsetTop = this.el.nativeElement.offsetTop;

    // Check Right boundary
    if (rect.right > viewportWidth) {
      const overflowRight = rect.right - viewportWidth;
      offsetLeft -= (overflowRight + 10);
    }

    // Check Left boundary
    if (rect.left < 0) {
      offsetLeft += (Math.abs(rect.left) + 40);
    }

    // Check Bottom boundary
    if (rect.bottom > viewportHeight) {
      const overflowBottom = rect.bottom - viewportHeight;
      offsetTop -= (overflowBottom + 20);
    }

    // Check Top boundary
    if (rect.top < 0) {
      offsetTop += (Math.abs(rect.top) + 20);
    }

    // Apply the corrected positions
    this.renderer.setStyle(this.el.nativeElement, 'left', `${offsetLeft}px`);
    this.renderer.setStyle(this.el.nativeElement, 'top', `${offsetTop}px`);
    this.renderer.setStyle(this.el.nativeElement, 'width', `${width}px`);
  }
}
