import { Component } from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {EschatologyRightMenu} from '../eschatology-right-menu/eschatology-right-menu';

@Component({
  selector: 'app-mid-trib',
  imports: [
    TheologySubMenu,
    EschatologyRightMenu
  ],
  templateUrl: './mid-trib.html',
  styleUrl: '../eschatology.scss',
})
export class MidTrib {

}
