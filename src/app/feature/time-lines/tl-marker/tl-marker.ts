import {Component, HostBinding, HostListener, input} from '@angular/core';

export interface iMarker {
  name: string;
  eventYear: number;
  height: number;
  label: {
    left: number;
    top: number;
    labelColor: string;
    note?: string;
  }
}

@Component({
  selector: 'app-tl-marker',
  templateUrl: './tl-marker.html',
  styleUrl: './tl-marker.scss',
})
export class TlMarker {
  default: iMarker = {
    name: "unknown",
    eventYear: 1000,
    height: 800,
    label: {
      left: -1.5,
      top: -4.2,
      labelColor: "white"
    }
  };
  marker = input<iMarker>(this.default);

  @HostBinding('class.hovered') isHovered = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.handleHoverChange(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.handleHoverChange(false);
  }

  private handleHoverChange(hovered: boolean) {
    this.isHovered = hovered;
  }
}
