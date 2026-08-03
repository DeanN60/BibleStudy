import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iThessalonians_4_16_17} from '@core/books/I Thessalonians/iThessalonians_4';

@Component({
  selector: 'app-not-second-coming',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './not-second-coming.html',
  styleUrl: '../rapture.scss',
})
export class NotSecondComing extends BasePageWithSubtitle {
  override pageSubtitle = 'Rapture - Not Second Coming';
  protected readonly iThessalonians_4_16_17 = iThessalonians_4_16_17;
}
