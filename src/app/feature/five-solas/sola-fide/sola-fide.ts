import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {Book} from '@core/book';
import {rom_3_28} from '@books/Romans/rom_3';
import {eph_2_8_9} from '@books/Ephesians/eph_2';
import {rom_4_4_5} from '@books/Romans/rom_4';

@Component({
  selector: 'app-sola-fide',
  imports: [
    FiveSolasSubMenu,
    Book
  ],
  templateUrl: './sola-fide.html',
  styleUrl: '../five-solas.scss',
})
export class SolaFide extends BasePageWithSubtitle {
    override pageSubtitle = 'Five Sola - Sola Fide';

  protected readonly rom_3_28 = rom_3_28;
  protected readonly eph_2_8_9 = eph_2_8_9;
  protected readonly rom_4_4_5 = rom_4_4_5;
}
