import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';
import {john_10_27_29} from '@books/John/john_10';
import {john_6_39} from '@books/John/john_6';
import {rom_8_29_30, rom_8_38_39} from '@books/Romans/rom_8';

@Component({
  selector: 'app-perseverance-of-the-saints',
  imports: [
    SubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './perseverance-of-the-saints.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../calvinism.scss',
})
export class PerseveranceOfTheSaints extends BasePageWithSubtitle {
  override pageSubtitle = "Perseverance of the Saints";

  protected readonly john_10_27_29 = john_10_27_29;
  protected readonly john_6_39 = john_6_39;
  protected readonly rom_8_29_30 = rom_8_29_30;
  protected readonly rom_8_38_39 = rom_8_38_39;
}
