import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {rev_12_5} from '@core/books/Revelation/rev_12';
import {acts_1_9_11} from '@core/books/Acts/acts_1';

@Component({
  selector: 'app-rapture-of-jesus',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './rapture-of-jesus.html',
  styleUrl: '../eschatology.scss',
})
export class RaptureOfJesus extends BasePageWithSubtitle {
    override pageSubtitle = "Eschatology - Rapture of Jesus";
  protected readonly rev_12_5 = rev_12_5;
  protected readonly acts_1_9_11 = acts_1_9_11;
}
