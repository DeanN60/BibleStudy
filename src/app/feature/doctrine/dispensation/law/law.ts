import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-law',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './law.html',
  styleUrl: '../dispensation.scss',
})
export class Law {

}
