import { Component } from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-gift-of-god',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './gift-of-god.html',
  styleUrl: '../salvation.scss',
})
export class GiftOfGod {

}
