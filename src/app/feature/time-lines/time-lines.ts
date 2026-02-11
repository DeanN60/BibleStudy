import {Component} from '@angular/core';
import {TimeLinesSubMenu} from './time-lines-sub-menu/time-lines-sub-menu';

@Component({
  selector: 'app-time-lines',
  imports: [
    TimeLinesSubMenu
  ],
  templateUrl: './time-lines.html',
  styleUrl: './time-lines.scss',
})
export class TimeLines {

}
