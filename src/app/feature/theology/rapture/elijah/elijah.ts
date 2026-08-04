import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {Verse} from '@core/verse';
import {iiKings_2_11_12} from '@core/books/II Kings/iiKings_2';

@Component({
  selector: 'app-elijah',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Verse
  ],
  templateUrl: './elijah.html',
  styleUrl: '../rapture.scss',
})
export class Elijah extends BasePageWithSubtitle {
  override pageSubtitle = 'Rapture - Elijah';
  protected readonly iiKings_2_11_12 = iiKings_2_11_12;
}
