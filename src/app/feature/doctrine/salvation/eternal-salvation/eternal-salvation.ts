import {Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {rev_3_1_6, rev_3_5} from '@core/books/Revelation/rev_3';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {hebrews_6_4_6} from '@core/books/Hebrews/hebrews_6';
import {eph_1_13_14} from '@core/books/Ephesians/eph_1';
import {rom_8_38_39} from '@core/books/Romans/rom_8';
import {iJohn_1_8_10} from '@core/books/I John/iJohn_1';
import {iCor_15_50_57} from '@core/books/I Corinthians/iCor_15';

@Component({
  selector: 'app-eternal-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './eternal-salvation.html',
  styleUrl: '../salvation.scss',
})
export class EternalSalvation extends BasePageWithSubtitle {
  readonly pageSubtitle = "Eternal Salvation";
  protected readonly rev_3_5 = rev_3_5;
  protected readonly hebrews_6_4_6 = hebrews_6_4_6;
  protected readonly rev_3_1_6 = rev_3_1_6;
  protected readonly eph_1_13_14 = eph_1_13_14;
  protected readonly rom_8_38_39 = rom_8_38_39;
  protected readonly iJohn_1_8_10 = iJohn_1_8_10;
  protected readonly iCor_15_50_57 = iCor_15_50_57;
}
