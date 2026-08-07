import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {Book} from '@core/book/book';
import {gen_3_23_24} from '@books/Genesis/gen_3';
import {gen_4_17_22, gen_4_1_8, gen_4_23_24, gen_4_25_26, gen_4_9_16} from '@books/Genesis/gen_4';

@Component({
  selector: 'app-conscience',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Book
  ],
  templateUrl: './conscience.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../dispensation.scss',
})
export class Conscience extends BasePageWithSubtitle {
  override pageSubtitle = "Dispensation of Conscience";

  protected readonly gen_3_23_24 = gen_3_23_24;
  protected readonly gen_4_1_8 = gen_4_1_8;
  protected readonly gen_4_9_16 = gen_4_9_16;
  protected readonly gen_4_17_22 = gen_4_17_22;
  protected readonly gen_4_23_24 = gen_4_23_24;
  protected readonly gen_4_25_26 = gen_4_25_26;
}
