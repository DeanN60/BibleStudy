import { Component } from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-need-for-salvation',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './need-for-salvation.html',
  styleUrl: '../salvation.scss',
})
export class NeedForSalvation {

}
