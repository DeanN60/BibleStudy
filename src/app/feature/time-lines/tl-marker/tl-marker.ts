import {Component, input} from '@angular/core';

export interface iMarker {
  name: string;
  eventYear: number;
  left: number;
  top: number;
  height: number;
  labelColor: string;
}

@Component({
  selector: 'app-tl-marker',
  imports: [],
  templateUrl: './tl-marker.html',
  styleUrl: './tl-marker.scss',
})
export class TlMarker {
  marker = input<iMarker>({name: "unknown", eventYear: 1000, left: -1.5, top: -4.2, height: 800, labelColor: "white"});
}
