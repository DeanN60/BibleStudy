import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {eph_2_8} from '@core/books/Ephesians/eph_2';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {john_14_6} from '@core/books/John/john_14';
import {rom_6_23} from '@core/books/Romans/rom_6';
import {iiPeter_3_9} from '@core/books/II Peter/iiPeter_3';

@Component({
  selector: 'app-gift-of-god',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './gift-of-god.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../salvation.scss',
})
export class GiftOfGod extends BasePageWithSubtitle {
  readonly pageSubtitle = "Gift of God"

  protected readonly eph_2_8 = eph_2_8;
  protected readonly john_14_6 = john_14_6;
  protected readonly rom_6_23 = rom_6_23;
  protected readonly iiPeter_3_9 = iiPeter_3_9;
}
