import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iThessalonians_1_10} from '@core/books/I Thessalonians/iThessalonians_1';
import {iThessalonians_4_16_17} from '@core/books/I Thessalonians/iThessalonians_4';

@Component({
  selector: 'app-rapture-not-second-coming',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './rapture-not-second-coming.html',
  styleUrl: '../eschatology.scss',
})
export class RaptureNotSecondComing extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Rapture Not Second Coming";
  protected readonly iThessalonians_1_10 = iThessalonians_1_10;
  protected readonly iThessalonians_4_16_17 = iThessalonians_4_16_17;
}
