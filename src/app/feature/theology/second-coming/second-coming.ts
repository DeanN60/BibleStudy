import {Component} from '@angular/core';
import {TheologySubMenu} from "../theology-sub-menu/theology-sub-menu";
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {matt_24_30} from '@core/books/Matthew/matt_24';
import {rev_1_7} from '@core/books/Revelation/rev_1';
import {acts_1_11} from '@core/books/Acts/acts_1';

@Component({
  selector: 'app-second-coming',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './second-coming.html',
  styleUrl: './second-coming.scss',
})
export class SecondComing extends BasePageWithSubtitle {
  override pageSubtitle = 'Second Coming';
  protected readonly matt_24_30 = matt_24_30;
  protected readonly rev_1_7 = rev_1_7;
  protected readonly acts_1_11 = acts_1_11;
}
