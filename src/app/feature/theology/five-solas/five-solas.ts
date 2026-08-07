import {Component} from '@angular/core';
import {TheologySubMenu} from '../theology-sub-menu/theology-sub-menu';
import {Verse} from '@core/verse';
import {iiTim_3_16_17} from '../../../../../public/assets/data/books/II Timothy/iiTim_3';
import {eph_2_8_9} from '../../../../../public/assets/data/books/Ephesians/eph_2';
import {rom_3_28} from '../../../../../public/assets/data/books/Romans/rom_3';
import {rom_4_4_5} from '../../../../../public/assets/data/books/Romans/rom_4';
import {titus_3_4_5} from '../../../../../public/assets/data/books/Titus/titus_3';
import {john_14_6} from '../../../../../public/assets/data/books/John/john_14';
import {iJohn_5_11_12} from '../../../../../public/assets/data/books/I John/iJohn_5';
import {isaiah_42_8} from '../../../../../public/assets/data/books/Isaiah/isaiah_42';
import {isaiah_48_11} from '../../../../../public/assets/data/books/Isaiah/isaiah_48';

@Component({
  selector: 'app-five-solas',
  imports: [
    TheologySubMenu,
    Verse
  ],
  templateUrl: './five-solas.html',
  styleUrl: './five-solas.scss',
})
export class FiveSolas {

  protected readonly iiTim_3_16_17 = iiTim_3_16_17;
  protected readonly eph_2_8_9 = eph_2_8_9;
  protected readonly rom_3_28 = rom_3_28;
  protected readonly rom_4_4_5 = rom_4_4_5;
  protected readonly titus_3_4_5 = titus_3_4_5;
  protected readonly john_14_6 = john_14_6;
  protected readonly iJohn_5_11_12 = iJohn_5_11_12;
  protected readonly isaiah_42_8 = isaiah_42_8;
  protected readonly isaiah_48_11 = isaiah_48_11;
}
