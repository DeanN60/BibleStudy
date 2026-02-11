import { Component } from '@angular/core';
import {JesusSubMenu} from "../jesus/jesus-sub-menu/jesus-sub-menu";
import {TimeLinesSubMenu} from './time-lines-sub-menu/time-lines-sub-menu';

@Component({
  selector: 'app-time-lines',
  imports: [
    JesusSubMenu,
    TimeLinesSubMenu
  ],
  templateUrl: './time-lines.html',
  styleUrl: './time-lines.scss',
})
export class TimeLines {

}
