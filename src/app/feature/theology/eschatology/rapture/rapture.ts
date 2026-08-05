import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iCor_15_51_52} from '@core/books/I Corinthians/iCor_15';
import {iThessalonians_4_16_17} from '@core/books/I Thessalonians/iThessalonians_4';

@Component({
  selector: 'app-rapture',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './rapture.html',
  styleUrl: '../eschatology.scss',
})
export class Rapture extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Rapture";
  protected readonly iCor_15_51_52 = iCor_15_51_52;
  protected readonly iThessalonians_4_16_17 = iThessalonians_4_16_17;
}
