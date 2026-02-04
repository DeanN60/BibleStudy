import { Component } from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-millennium',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './millennium.html',
  styleUrl: '../dispensation.scss',
})
export class Millennium {

}
