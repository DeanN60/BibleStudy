import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {john_10_11_15, john_10_26} from '@core/books/John/john_10';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {matt_7_13_14} from '@core/books/Matthew/matt_7';

@Component({
  selector: 'app-limited-atonement',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './limited-atonement.html',
  styleUrl: '../calvinism.scss',
})
export class LimitedAtonement extends BasePageWithSubtitle {
  override pageSubtitle = "Limited Atonement";

  protected readonly john_10_11_15 = john_10_11_15;
  protected readonly john_10_26 = john_10_26;
  protected readonly matt_7_13_14 = matt_7_13_14;
}
