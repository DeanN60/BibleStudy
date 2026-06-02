import {Component, input} from '@angular/core';

export interface iMarker {
  name: string;
  eventYear: number;
  top: number;
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
  imports: [],
  templateUrl: './tl-marker.html',
  styleUrl: './tl-marker.scss',
})
export class TlMarker {
  default: iMarker = {
    name: "unknown",
    eventYear: 1000,
    top: 5,
    height: 800,
    label: {
      left: -1.5,
      top: -4.2,
      labelColor: "white"
    }
  };
  marker = input<iMarker>(this.default);
}
