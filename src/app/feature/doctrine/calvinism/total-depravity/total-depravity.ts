import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {rom_3_10_18} from '../../../../../../public/assets/data/books/Romans/rom_3';
import {jer_17_9} from '../../../../../../public/assets/data/books/Jeremiah/jer_17';
import {gen_6_5} from '../../../../../../public/assets/data/books/Genesis/gen_6';
import {eph_2_1_3} from '../../../../../../public/assets/data/books/Ephesians/eph_2';
import {rom_8_7_8} from '../../../../../../public/assets/data/books/Romans/rom_8';
import {john_6_44} from '../../../../../../public/assets/data/books/John/john_6';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-total-depravity',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './total-depravity.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../calvinism.scss',
})
export class TotalDepravity extends BasePageWithSubtitle {
  override pageSubtitle = "Total Depravity";

  protected readonly rom_3_10_18 = rom_3_10_18;
  protected readonly jer_17_9 = jer_17_9;
  protected readonly gen_6_5 = gen_6_5;
  protected readonly eph_2_1_3 = eph_2_1_3;
  protected readonly rom_8_7_8 = rom_8_7_8;
  protected readonly john_6_44 = john_6_44;
}
