import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';
import {rev_3_1_6, rev_3_5} from '@books/Revelation/rev_3';
import {hebrews_6_4_6} from '@books/Hebrews/hebrews_6';
import {eph_1_13_14} from '@books/Ephesians/eph_1';
import {rom_8_38_39} from '@books/Romans/rom_8';
import {iJohn_1_8_10} from '@books/I John/iJohn_1';
import {iCor_15_50_57} from '@books/I Corinthians/iCor_15';

@Component({
  selector: 'app-eternal-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './eternal-salvation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
