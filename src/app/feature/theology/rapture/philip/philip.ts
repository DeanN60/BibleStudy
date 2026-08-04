import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {Verse} from '@core/verse';
import {acts_8_39_40} from '@core/books/Acts/acts_8';

@Component({
  selector: 'app-philip',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Verse
  ],
  templateUrl: './philip.html',
  styleUrl: '../rapture.scss',
})
export class Philip extends BasePageWithSubtitle {
  override pageSubtitle = 'Rapture - Philip';
  protected readonly acts_8_39_40 = acts_8_39_40;
}
