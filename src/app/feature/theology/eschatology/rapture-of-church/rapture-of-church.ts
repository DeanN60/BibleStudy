import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iCor_15_51_52} from '../../../../../../public/assets/data/books/I Corinthians/iCor_15';
import {iThessalonians_4_16_17} from '../../../../../../public/assets/data/books/I Thessalonians/iThessalonians_4';
import {isaiah_26_19_21} from '../../../../../../public/assets/data/books/Isaiah/isaiah_26';

@Component({
  selector: 'app-rapture-of-church',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './rapture-of-church.html',
  styleUrl: '../eschatology.scss',
})
export class RaptureOfChurch extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Rapture of Church";
  protected readonly iCor_15_51_52 = iCor_15_51_52;
  protected readonly iThessalonians_4_16_17 = iThessalonians_4_16_17;
  protected readonly isaiah_26_19_21 = isaiah_26_19_21;
}
