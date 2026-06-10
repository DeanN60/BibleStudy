import {Component, OnInit} from '@angular/core';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {VerseData} from '@core/verse-data';
import {rom_3_10_18, rom_3_23} from '@core/books/Romans/rom_3';
import {rom_10_9, rom_10_13} from '@core/books/Romans/rom_10';
import {rom_8_1, rom_8_38_39} from '@core/books/Romans/rom_8';
import {rom_11_6} from '@core/books/Romans/rom_11';
import {rom_5_1, rom_5_15, rom_5_8} from '@core/books/Romans/rom_5';
import {rom_6_23} from '@core/books/Romans/rom_6';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {eph_2_8} from '@core/books/Ephesians/eph_2';

@Component({
  selector: 'app-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './salvation.html',
  styleUrl: './salvation.scss',
})
export class Salvation extends BasePageWithSubtitle {
  override pageSubtitle = "Salvation";

  protected readonly rom_3_23 = rom_3_23;
  protected readonly rom_10_9 = rom_10_9;
  protected readonly rom_10_13 = rom_10_13;
  protected readonly rom_8_1 = rom_8_1;
  protected readonly rom_8_38_39 = rom_8_38_39;
  protected readonly rom_11_6 = rom_11_6;
  protected readonly rom_3_10_18 = rom_3_10_18;
  protected readonly rom_5_8 = rom_5_8;
  protected readonly rom_5_1 = rom_5_1;
  protected readonly rom_5_15 = rom_5_15;
  protected readonly rom_6_23 = rom_6_23;
  protected readonly eph_2_8 = eph_2_8;
}
