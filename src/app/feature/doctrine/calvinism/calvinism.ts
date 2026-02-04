import {Component} from '@angular/core';
import {SubMenu} from "../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from './right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-calvinism',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './calvinism.html',
  styleUrl: './calvinism.scss',
})
export class Calvinism {

}
