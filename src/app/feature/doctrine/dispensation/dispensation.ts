import {Component} from '@angular/core';
import {SubMenu} from "../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iCor_9_17} from '@core/books/I Corinthians/iCor_9';
import {eph_1_10} from '@core/books/Ephesians/eph_1';
import {eph_3_2} from '@core/books/Ephesians/eph_3';
import {col_1_25} from '@core/books/Colossians/col_1';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-dispensation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './dispensation.html',
  styleUrl: './dispensation.scss',
})
export class Dispensation extends BasePageWithSubtitle {
  override pageSubtitle = "Dispensation";

  protected readonly iCor_9_17 = iCor_9_17;
  protected readonly eph_1_10 = eph_1_10;
  protected readonly eph_3_2 = eph_3_2;
  protected readonly col_1_25 = col_1_25;
}
