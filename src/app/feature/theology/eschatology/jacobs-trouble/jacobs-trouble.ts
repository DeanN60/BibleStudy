import { Component, ChangeDetectionStrategy } from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {jer_30_10_11, jer_30_1_6, jer_30_7} from '@core/books/Jeremiah/jer_30';
import {matt_24_21} from '@core/books/Matthew/matt_24';

@Component({
  selector: 'app-jacobs-trouble',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './jacobs-trouble.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../eschatology.scss',
})
export class JacobsTrouble extends BasePageWithSubtitle {
    override pageSubtitle = "Jacob`s Trouble";

  protected readonly jer_30_7 = jer_30_7;
  protected readonly jer_30_1_6 = jer_30_1_6;
  protected readonly jer_30_10_11 = jer_30_10_11;
  protected readonly matt_24_21 = matt_24_21;
}
