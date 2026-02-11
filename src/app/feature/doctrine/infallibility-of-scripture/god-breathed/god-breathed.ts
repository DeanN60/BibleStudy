import { Component } from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-god-breathed',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './god-breathed.html',
  styleUrl: '../infallibility-of-scripture.scss',
})
export class GodBreathed {

}
