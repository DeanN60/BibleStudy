import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {deut_31_6} from '@core/books/Deuteronomy/deut_31';
import {hos_11_8_9} from '@core/books/Hosea/hos_11';
import {jer_31_3} from '@core/books/Jeremiah/jer_31';
import {isaiah_54_10} from '@core/books/Isaiah/isaiah_54';

@Component({
  selector: 'app-never-give-up',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Verse
  ],
  templateUrl: './never-give-up.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../israelology.scss',
})
export class NeverGiveUp extends BasePageWithSubtitle {
    override pageSubtitle = "Israelology - never give up";

  protected readonly deut_31_6 = deut_31_6;
  protected readonly hos_11_8_9 = hos_11_8_9;
  protected readonly jer_31_3 = jer_31_3;
  protected readonly isaiah_54_10 = isaiah_54_10;
}
