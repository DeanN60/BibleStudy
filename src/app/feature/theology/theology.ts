import { Component } from '@angular/core';
import {TheologySubMenu} from './theology-sub-menu/theology-sub-menu';

@Component({
  selector: 'app-theology',
  imports: [
    TheologySubMenu
  ],
  templateUrl: './theology.html',
  styleUrl: './theology.scss',
})
export class Theology {

}
