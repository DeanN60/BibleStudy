import {Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {rom_3_23_26} from '@core/books/Romans/rom_3';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

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
export class NeedForSalvation extends BasePageWithSubtitle {
  override pageSubtitle = "Need For Salvation";

  protected readonly rom_3_23_26 = rom_3_23_26;
}
