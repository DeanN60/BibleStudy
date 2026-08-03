import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {Verse} from '@core/verse';
import {rev_11_11_12} from '@core/books/Revelation/rev_11';

@Component({
  selector: 'app-witnesses',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Verse
  ],
  templateUrl: './witnesses.html',
  styleUrl: '../rapture.scss',
})
export class Witnesses extends BasePageWithSubtitle {
  override pageSubtitle = 'Rapture - Two Witnesses';
  protected readonly rev_11_11_12 = rev_11_11_12;
}
