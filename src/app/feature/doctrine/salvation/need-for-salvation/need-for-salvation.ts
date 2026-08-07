import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';
import {rom_3_23_26} from '@books/Romans/rom_3';
import {john_14_6} from '@books/John/john_14';
import {isaiah_53_5} from '@books/Isaiah/isaiah_53';

@Component({
  selector: 'app-need-for-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './need-for-salvation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../salvation.scss',
})
export class NeedForSalvation extends BasePageWithSubtitle {
  override pageSubtitle = "Need For Salvation";

  protected readonly rom_3_23_26 = rom_3_23_26;
  protected readonly john_14_6 = john_14_6;
  protected readonly isaiah_53_5 = isaiah_53_5;
}
