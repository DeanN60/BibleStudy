import {Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {
  matt_25_14_29,
  matt_25_19_21,
  matt_25_1_13,
  matt_25_22_23,
  matt_25_24_25,
  matt_25_26_28,
  matt_25_29_30
} from '@core/books/Matthew/matt_25';
import {matt_7_21_23} from '@core/books/Matthew/matt_7';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-missing-the-kingdom',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './missing-the-kingdom.html',
  styleUrl: '../salvation.scss',
})
export class MissingTheKingdom extends BasePageWithSubtitle {
  readonly pageSubtitle = 'Missing The Kingdom';

  protected readonly matt_25_14_29 = matt_25_14_29;
  protected readonly matt_25_19_21 = matt_25_19_21;
  protected readonly matt_25_22_23 = matt_25_22_23;
  protected readonly matt_25_26_28 = matt_25_26_28;
  protected readonly matt_25_24_25 = matt_25_24_25;
  protected readonly matt_25_29_30 = matt_25_29_30;
  protected readonly matt_25_1_13 = matt_25_1_13;
  protected readonly matt_7_21_23 = matt_7_21_23;
}
