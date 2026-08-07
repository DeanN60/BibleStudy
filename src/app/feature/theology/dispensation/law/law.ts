import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {exodus_19_3_8} from '../../../../../../public/assets/data/books/Exodus/exodus_19';
import {john_19_30} from '../../../../../../public/assets/data/books/John/john_19';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';

@Component({
  selector: 'app-law',
  imports: [
    RightSubMenu,
    Verse,
    TheologySubMenu
  ],
  templateUrl: './law.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../dispensation.scss',
})
export class Law extends BasePageWithSubtitle {
  override pageSubtitle = "Dispensation of the Law";

  protected readonly exodus_19_3_8 = exodus_19_3_8;
  protected readonly john_19_30 = john_19_30;
}
