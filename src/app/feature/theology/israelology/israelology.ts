import { Component } from '@angular/core';
import {TheologySubMenu} from '../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-israelology',
  imports: [
    TheologySubMenu,
    RightSubMenu
  ],
  templateUrl: './israelology.html',
  styleUrl: './israelology.scss',
})
export class Israelology {

}
