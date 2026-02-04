import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-grace',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './grace.html',
  styleUrl: '../dispensation.scss',
})
export class Grace {

}
