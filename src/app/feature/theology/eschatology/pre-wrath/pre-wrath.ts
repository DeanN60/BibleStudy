import { Component } from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {matt_24_15_25, matt_24_29_31, matt_24_36} from '@core/books/Matthew/matt_24';
import {rev_6_12_17, rev_6_9_11} from '@core/books/Revelation/rev_6';
import {iThessalonians_5_9} from '@core/books/I Thessalonians/iThessalonians_5';
import {iThessalonians_1_10} from '@core/books/I Thessalonians/iThessalonians_1';
import {joel_2_30_31} from '@core/books/Joel/joel_2';
import {zeph_2_2_3} from '@core/books/Zephaniah/zeph_2';

@Component({
  selector: 'app-pre-wrath',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Verse
  ],
  templateUrl: './pre-wrath.html',
  styleUrl: '../eschatology.scss',
})
export class PreWrath extends BasePageWithSubtitle {
    override pageSubtitle = "Pre-Wrath";

  protected readonly matt_24_29_31 = matt_24_29_31;
  protected readonly matt_24_15_25 = matt_24_15_25;
  protected readonly rev_6_9_11 = rev_6_9_11;
  protected readonly rev_6_12_17 = rev_6_12_17;
  protected readonly iThessalonians_5_9 = iThessalonians_5_9;
  protected readonly iThessalonians_1_10 = iThessalonians_1_10;
  protected readonly joel_2_30_31 = joel_2_30_31;
  protected readonly zeph_2_2_3 = zeph_2_2_3;
  protected readonly matt_24_36 = matt_24_36;
}
