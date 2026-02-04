import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-innocence',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './innocence.html',
  styleUrl: '../dispensation.scss',
})
export class Innocence {

}
