import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-perseverance-of-the-saints',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './perseverance-of-the-saints.html',
  styleUrl: '../calvinism.scss',
})
export class PerseveranceOfTheSaints {

}
