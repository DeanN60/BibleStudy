import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {gen_3_23_24} from '@core/books/Genesis/gen_3';
import {gen_4_17_22, gen_4_1_8, gen_4_23_24, gen_4_25_26, gen_4_9_16} from '@core/books/Genesis/gen_4';

@Component({
  selector: 'app-conscience',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
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
