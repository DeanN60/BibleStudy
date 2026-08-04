import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iThessalonians_4_16_17} from '@core/books/I Thessalonians/iThessalonians_4';
import {iCor_15_51_52} from '@core/books/I Corinthians/iCor_15';
import {isaiah_26_19_21} from '@core/books/Isaiah/isaiah_26';

@Component({
  selector: 'app-church',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './church.html',
  styleUrl: '../rapture.scss',
})
export class Church extends BasePageWithSubtitle {
  override pageSubtitle = 'Rapture - The Church';
  protected readonly iThessalonians_4_16_17 = iThessalonians_4_16_17;
  protected readonly iCor_15_51_52 = iCor_15_51_52;
  protected readonly isaiah_26_19_21 = isaiah_26_19_21;
}
