import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {gen_8_20_21} from '../../../../../../public/assets/data/books/Genesis/gen_8';
import {gen_11_1_9} from '../../../../../../public/assets/data/books/Genesis/gen_11';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';

@Component({
  selector: 'app-human-government',
  imports: [
    RightSubMenu,
    Verse,
    TheologySubMenu
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
