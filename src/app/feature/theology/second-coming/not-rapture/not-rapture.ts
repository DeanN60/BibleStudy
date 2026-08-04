import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {zech_14_2_4, zech_14_4} from '@core/books/Zechariah/zech_14';
import {iThessalonians_4_16_17} from '@core/books/I Thessalonians/iThessalonians_4';
import {rev_19_11_16, rev_19_19_20} from '@core/books/Revelation/rev_19';
import {acts_1_11} from '@core/books/Acts/acts_1';
import {matt_24_30} from '@core/books/Matthew/matt_24';
import {rev_1_7} from '@core/books/Revelation/rev_1';
import {iiThessalonians_2_8} from '@core/books/II Thessalonians/iiThessalonians_2';

@Component({
  selector: 'app-not-rapture',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './not-rapture.html',
  styleUrl: '../second-coming.scss',
})
export class NotRapture extends BasePageWithSubtitle {
    override pageSubtitle = 'Second Coming - Not Rapture';
  protected readonly zech_14_4 = zech_14_4;
  protected readonly iThessalonians_4_16_17 = iThessalonians_4_16_17;
  protected readonly rev_19_11_16 = rev_19_11_16;
  protected readonly acts_1_11 = acts_1_11;
  protected readonly matt_24_30 = matt_24_30;
  protected readonly rev_1_7 = rev_1_7;
  protected readonly iiThessalonians_2_8 = iiThessalonians_2_8;
  protected readonly rev_19_19_20 = rev_19_19_20;
  protected readonly zech_14_2_4 = zech_14_2_4;
}
