import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {eph_2_9_10} from '@core/books/Ephesians/eph_2';
import {rom_4_4, rom_4_5} from '@core/books/Romans/rom_4';

@Component({
  selector: 'app-not-of-works',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './not-of-works.html',
  styleUrl: '../salvation.scss',
})
export class NotOfWorks {
  protected readonly eph_2_9_10 = eph_2_9_10;
  protected readonly rom_4_4 = rom_4_4;
  protected readonly rom_4_5 = rom_4_5;
}
