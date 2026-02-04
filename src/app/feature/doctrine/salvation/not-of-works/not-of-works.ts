import { Component } from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-not-of-works',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './not-of-works.html',
  styleUrl: '../salvation.scss',
})
export class NotOfWorks {

}
