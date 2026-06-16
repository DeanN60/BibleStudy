import { Component } from '@angular/core';
import {SubMenu} from "../doctrine-sub-menu/sub-menu";
import {Verse} from '@core/verse';
import {john_1_1_5, john_1_14} from '@core/books/John/john_1';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {psalms_33_6} from '@core/books/Psalms/psalms_33';
import {john_14_16_17, john_14_25_26, john_14_9_14} from '@core/books/John/john_14';

@Component({
  selector: 'app-trinity',
  imports: [
    SubMenu,
    Verse
  ],
  templateUrl: './trinity.html',
  styleUrl: './trinity.scss',
})
export class Trinity extends BasePageWithSubtitle {
  override pageSubtitle = "Trinity";

  protected readonly john_1_1_5 = john_1_1_5;
  protected readonly john_1_14 = john_1_14;
  protected readonly psalms_33_6 = psalms_33_6;
  protected readonly john_14_9_14 = john_14_9_14;
  protected readonly john_14_16_17 = john_14_16_17;
  protected readonly john_14_25_26 = john_14_25_26;
}
