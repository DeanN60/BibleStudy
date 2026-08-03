import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {Verse} from '@core/verse';
import {acts_1_9_11} from '@core/books/Acts/acts_1';
import {rev_12_5} from '@core/books/Revelation/rev_12';

@Component({
  selector: 'app-jesus',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Verse
  ],
  templateUrl: './jesus.html',
  styleUrl: '../rapture.scss',
})
export class Jesus extends BasePageWithSubtitle {
  override pageSubtitle = 'Rapture - Jesus';
  protected readonly acts_1_9_11 = acts_1_9_11;
  protected readonly rev_12_5 = rev_12_5;
}
