import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-irresistible-grace',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './irresistible-grace.html',
  styleUrl: '../calvinism.scss',
})
export class IrresistibleGrace {

}
