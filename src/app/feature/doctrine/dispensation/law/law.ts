import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {exodus_19_3_8} from '@core/books/Exodus/exodus_19';
import {john_19_30} from '@core/books/John/john_19';

@Component({
  selector: 'app-law',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
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
