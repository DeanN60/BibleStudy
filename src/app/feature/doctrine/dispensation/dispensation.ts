import { Component } from '@angular/core';
import {SubMenu} from "../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from './right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-dispensation',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './dispensation.html',
  styleUrl: './dispensation.scss',
})
export class Dispensation {

}
