import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';
import {iiTim_3_16_17} from '@books/II Timothy/iiTim_3';

@Component({
  selector: 'app-god-breathed',
  imports: [
    SubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './god-breathed.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../infallibility-of-scripture.scss',
})
export class GodBreathed extends BasePageWithSubtitle {
  override pageSubtitle = "God Breathed";
  protected readonly iiTimothy_3_16_17 = iiTim_3_16_17;
}
