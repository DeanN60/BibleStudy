import {Component} from '@angular/core';
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
export class Salvation {
  eph_2_8 = new VerseData(
    "Ephesians 2:8",
    "8 For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:",
    "King James Version"
  );
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
}
