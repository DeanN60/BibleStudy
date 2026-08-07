import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {Book} from '@core/book/book';
import {gen_8_20_21} from '@books/Genesis/gen_8';
import {gen_11_1_9} from '@books/Genesis/gen_11';

@Component({
  selector: 'app-human-government',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Book
  ],
  templateUrl: './human-government.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../dispensation.scss',
})
export class HumanGovernment extends BasePageWithSubtitle {
  override pageSubtitle = "Dispensation of Human Government";

  protected readonly gen_8_20_21 = gen_8_20_21;
  protected readonly gen_11_1_9 = gen_11_1_9;
}
