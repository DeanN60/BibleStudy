import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-limited-atonement',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './limited-atonement.html',
  styleUrl: '../calvinism.scss',
})
export class LimitedAtonement {

}
