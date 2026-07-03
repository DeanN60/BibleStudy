import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iiTim_3_16_17} from '@core/books/II Timothy/iiTim_3';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-god-breathed',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './god-breathed.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../infallibility-of-scripture.scss',
})
export class GodBreathed extends BasePageWithSubtitle {
  override pageSubtitle = "God Breathed";
  protected readonly iiTimothy_3_16_17 = iiTim_3_16_17;
}
