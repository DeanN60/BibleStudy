import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-human-government',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './human-government.html',
  styleUrl: '../dispensation.scss',
})
export class HumanGovernment {

}
