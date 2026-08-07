import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {Book} from '@core/book/book';
import {gen_1_28_31} from '@books/Genesis/gen_1';
import {gen_2_1_25} from '@books/Genesis/gen_2';
import {gen_3_1_19} from '@books/Genesis/gen_3';

@Component({
  selector: 'app-innocence',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Book
  ],
  templateUrl: './innocence.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../dispensation.scss',
})
export class Innocence extends BasePageWithSubtitle {
  override pageSubtitle = "Dispensation of the Innocence";

  protected readonly gen_1_28_31 = gen_1_28_31;
  protected readonly gen_2_1_25 = gen_2_1_25;
  protected readonly gen_3_1_19 = gen_3_1_19;
}
