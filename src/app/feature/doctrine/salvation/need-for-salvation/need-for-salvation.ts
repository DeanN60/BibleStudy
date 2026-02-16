import {Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {rom_3_23_26} from '@core/books/Romans/rom_3';

@Component({
  selector: 'app-need-for-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './need-for-salvation.html',
  styleUrl: '../salvation.scss',
})
export class NeedForSalvation {
  protected readonly rom_3_23_26 = rom_3_23_26;
}
