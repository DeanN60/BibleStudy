import {Component, ChangeDetectionStrategy} from '@angular/core';
import {LoiSubMenu} from '../loi-sub-menu/loi-sub-menu';
import {Tribe} from '@core/tribe/tribe';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {num_2_10_16, num_2_17_24, num_2_25_31, num_2_3_9} from '@core/books/Numbers/num_2';
import {ezekiel_1_10} from '@core/books/Ezekiel/ezekiel_1';
import {rev_4_6_7} from '@core/books/Revelation/rev_4';

@Component({
  selector: 'app-numbers-2',
  imports: [
    LoiSubMenu,
    Tribe,
    Verse
  ],
  templateUrl: './numbers-2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['../listings-of-israel.scss','./numbers-2.scss'],
})
export class Numbers2 extends BasePageWithSubtitle {
    override pageSubtitle = "Numbers 2 Listing";

  protected readonly num_2_3_9 = num_2_3_9;
  protected readonly num_2_10_16 = num_2_10_16;
  protected readonly num_2_17_24 = num_2_17_24;
  protected readonly num_2_25_31 = num_2_25_31;
  protected readonly ezekiel_1_10 = ezekiel_1_10;
  protected readonly rev_4_6_7 = rev_4_6_7;
}
