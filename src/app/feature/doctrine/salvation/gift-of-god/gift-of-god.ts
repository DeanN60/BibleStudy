import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {eph_2_8} from '@core/books/Ephesians/eph_2';

@Component({
  selector: 'app-gift-of-god',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './gift-of-god.html',
  styleUrl: '../salvation.scss',
})
export class GiftOfGod {
  protected readonly eph_2_8 = eph_2_8;
}
