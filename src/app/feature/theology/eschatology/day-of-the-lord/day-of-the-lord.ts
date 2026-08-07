import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {amos_5_18_20} from '../../../../../../public/assets/data/books/Amos/amos_5';
import {joel_2_11, joel_2_1_2, joel_2_31_32} from '../../../../../../public/assets/data/books/Joel/joel_2';
import {isaiah_13_6, isaiah_13_9} from '../../../../../../public/assets/data/books/Isaiah/isaiah_13';
import {zeph_1_14_15} from '../../../../../../public/assets/data/books/Zephaniah/zeph_1';
import {malachi_4_1_3, malachi_4_5} from '../../../../../../public/assets/data/books/Malachi/malachi_4';
import {iThessalonians_5_1_3, iThessalonians_5_9} from '../../../../../../public/assets/data/books/I Thessalonians/iThessalonians_5';
import {iiThessalonians_2_1_3} from '../../../../../../public/assets/data/books/II Thessalonians/iiThessalonians_2';
import {iiPeter_3_10, iiPeter_3_13} from '../../../../../../public/assets/data/books/II Peter/iiPeter_3';
import {acts_2_20_21} from '../../../../../../public/assets/data/books/Acts/acts_2';

@Component({
  selector: 'app-day-of-the-lord',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './day-of-the-lord.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../eschatology.scss',
})
export class DayOfTheLord extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Day of The Lord";

  protected readonly amos_5_18_20 = amos_5_18_20;
  protected readonly joel_2_1_2 = joel_2_1_2;
  protected readonly joel_2_11 = joel_2_11;
  protected readonly joel_2_31_32 = joel_2_31_32;
  protected readonly isaiah_13_6 = isaiah_13_6;
  protected readonly isaiah_13_9 = isaiah_13_9;
  protected readonly zeph_1_14_15 = zeph_1_14_15;
  protected readonly malachi_4_5 = malachi_4_5;
  protected readonly malachi_4_1_3 = malachi_4_1_3;
  protected readonly iThessalonians_5_1_3 = iThessalonians_5_1_3;
  protected readonly iThessalonians_5_9 = iThessalonians_5_9;
  protected readonly iiThessalonians_2_1_3 = iiThessalonians_2_1_3;
  protected readonly iiPeter_3_10 = iiPeter_3_10;
  protected readonly iiPeter_3_13 = iiPeter_3_13;
  protected readonly acts_2_20_21 = acts_2_20_21;
}
