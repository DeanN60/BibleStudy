import {Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {rom_3_23_26} from '@core/books/Romans/rom_3';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {john_14_6} from '@core/books/John/john_14';
import {isaiah_53_5} from '@core/books/Isaiah/isaiah_53';

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
  protected readonly john_14_6 = john_14_6;
  protected readonly isaiah_53_5 = isaiah_53_5;
}
