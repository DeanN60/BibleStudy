import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {gen_5_24} from '@core/books/Genesis/gen_5';
import {hebrews_11_5} from '@core/books/Hebrews/hebrews_11';

@Component({
  selector: 'app-rapture-of-enoch',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './rapture-of-enoch.html',
  styleUrl: '../eschatology.scss',
})
export class RaptureOfEnoch extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Rapture of Enoch";
  protected readonly gen_5_24 = gen_5_24;
  protected readonly hebrews_11_5 = hebrews_11_5;
}
