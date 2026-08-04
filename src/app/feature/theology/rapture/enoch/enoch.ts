import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {hebrews_11_5} from '@core/books/Hebrews/hebrews_11';
import {Verse} from '@core/verse';
import {gen_5_24} from '@core/books/Genesis/gen_5';

@Component({
  selector: 'app-enoch',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Verse
  ],
  templateUrl: './enoch.html',
  styleUrl: '../rapture.scss',
})
export class Enoch extends BasePageWithSubtitle {
  override pageSubtitle = 'Rapture - Enoch';
  protected readonly hebrews_11_5 = hebrews_11_5;
  protected readonly gen_5_24 = gen_5_24;
}
