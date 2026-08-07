import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';
import {eph_2_9_10} from '@books/Ephesians/eph_2';
import {rom_4_4, rom_4_5} from '@books/Romans/rom_4';

@Component({
  selector: 'app-not-of-works',
  imports: [
    SubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './not-of-works.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../salvation.scss',
})
export class NotOfWorks extends BasePageWithSubtitle {
  override pageSubtitle = "Not of Works";

  protected readonly eph_2_9_10 = eph_2_9_10;
  protected readonly rom_4_4 = rom_4_4;
  protected readonly rom_4_5 = rom_4_5;
}
