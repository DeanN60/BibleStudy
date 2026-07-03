import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {john_10_27_29} from '@core/books/John/john_10';
import {john_6_39} from '@core/books/John/john_6';
import {rom_8_29_30, rom_8_38_39} from '@core/books/Romans/rom_8';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-perseverance-of-the-saints',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
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
