import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book/book';
import {rev_1_7} from '@books/Revelation/rev_1';
import {rev_19_11_16, rev_19_19_20} from '@books/Revelation/rev_19';
import {iiThessalonians_2_8} from '@books/II Thessalonians/iiThessalonians_2';
import {matt_24_30} from '@books/Matthew/matt_24';
import {acts_1_11} from '@books/Acts/acts_1';
import {zech_14_2_4, zech_14_4} from '@books/Zechariah/zech_14';

@Component({
  selector: 'app-second-coming-not-rapture',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './second-coming-not-rapture.html',
  styleUrl: '../eschatology.scss',
})
export class SecondComingNotRapture extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Second Coming Not Rapture";
  protected readonly rev_1_7 = rev_1_7;
  protected readonly rev_19_11_16 = rev_19_11_16;
  protected readonly iiThessalonians_2_8 = iiThessalonians_2_8;
  protected readonly matt_24_30 = matt_24_30;
  protected readonly acts_1_11 = acts_1_11;
  protected readonly zech_14_4 = zech_14_4;
  protected readonly rev_19_19_20 = rev_19_19_20;
  protected readonly zech_14_2_4 = zech_14_2_4;
}
