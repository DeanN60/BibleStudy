import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {eph_2_8} from '@core/books/Ephesians/eph_2';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {john_14_6} from '@core/books/John/john_14';

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
export class GiftOfGod extends BasePageWithSubtitle {
  readonly pageSubtitle = "Gift of God"

  protected readonly eph_2_8 = eph_2_8;
  protected readonly john_14_6 = john_14_6;
}
