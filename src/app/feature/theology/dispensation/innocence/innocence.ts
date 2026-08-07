import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {gen_1_28_31} from '../../../../../../public/assets/data/books/Genesis/gen_1';
import {gen_2_1_25} from '../../../../../../public/assets/data/books/Genesis/gen_2';
import {gen_3_1_19} from '../../../../../../public/assets/data/books/Genesis/gen_3';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';

@Component({
  selector: 'app-innocence',
  imports: [
    RightSubMenu,
    Verse,
    TheologySubMenu
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
