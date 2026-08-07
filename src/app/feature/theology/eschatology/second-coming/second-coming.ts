import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {rev_1_7} from '../../../../../../public/assets/data/books/Revelation/rev_1';
import {matt_24_30} from '../../../../../../public/assets/data/books/Matthew/matt_24';
import {acts_1_11} from '../../../../../../public/assets/data/books/Acts/acts_1';

@Component({
  selector: 'app-second-coming',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './second-coming.html',
  styleUrl: '../eschatology.scss',
})
export class SecondComing extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Second Coming";
  protected readonly rev_1_7 = rev_1_7;
  protected readonly matt_24_30 = matt_24_30;
  protected readonly acts_1_11 = acts_1_11;
}
