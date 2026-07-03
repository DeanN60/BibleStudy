import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {rev_11_15_18} from '@core/books/Revelation/rev_11';
import {daniel_9_27} from '@core/books/Daniel/daniel_9';
import {matt_24_15_25, matt_24_36} from '@core/books/Matthew/matt_24';
import {rev_12_6_14} from '@core/books/Revelation/rev_12';

@Component({
  selector: 'app-mid-trib',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './mid-trib.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../eschatology.scss',
})
export class MidTrib extends BasePageWithSubtitle {
  override pageSubtitle = "Mid-Tribulation";

  protected readonly rev_11_15_18 = rev_11_15_18;
  protected readonly daniel_9_27 = daniel_9_27;
  protected readonly matt_24_15_25 = matt_24_15_25;
  protected readonly rev_12_6_14 = rev_12_6_14;
  protected readonly matt_24_36 = matt_24_36;
}
