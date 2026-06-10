import { Component } from '@angular/core';
import {JesusSubMenu} from '../jesus-sub-menu/jesus-sub-menu';
import {Verse} from '@core/verse';
import {john_1} from '@core/books/John/john_1';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-deity',
  imports: [
    JesusSubMenu,
    Verse
  ],
  templateUrl: './deity.html',
  styleUrl: '../jesus.scss',
})
export class Deity extends BasePageWithSubtitle {
  override pageSubtitle = "Deity";

  protected readonly john_1_1_5 = john_1;
}
