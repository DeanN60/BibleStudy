import { Component } from '@angular/core';
import {EschatologyRightMenu} from '../eschatology-right-menu/eschatology-right-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';

@Component({
  selector: 'app-pre-wrath',
  imports: [
    EschatologyRightMenu,
    TheologySubMenu
  ],
  templateUrl: './pre-wrath.html',
  styleUrl: '../eschatology.scss',
})
export class PreWrath {

}
