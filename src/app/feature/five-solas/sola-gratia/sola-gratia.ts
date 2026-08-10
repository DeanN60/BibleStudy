import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {Book} from '@core/book';
import {titus_3_4_5} from '@books/Titus/titus_3';
import {eph_2_8_9} from '@books/Ephesians/eph_2';

@Component({
  selector: 'app-sola-gratia',
  imports: [
    FiveSolasSubMenu,
    Book
  ],
  templateUrl: './sola-gratia.html',
  styleUrl: '../five-solas.scss',
})
export class SolaGratia extends BasePageWithSubtitle {
    override pageSubtitle = "Five Sola - Sola Gratia";

  protected readonly titus_3_4_5 = titus_3_4_5;
  protected readonly eph_2_8_9 = eph_2_8_9;
}
