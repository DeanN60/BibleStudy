import { Component, ChangeDetectionStrategy } from '@angular/core';
import {JesusSubMenu} from '../jesus-sub-menu/jesus-sub-menu';
import {Verse} from '@core/verse';
import {john_1_14} from '@core/books/John/john_1';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-incarnate',
  imports: [
    JesusSubMenu,
    Verse
  ],
  templateUrl: './incarnate.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../jesus.scss',
})
export class Incarnate extends BasePageWithSubtitle {
  override pageSubtitle = "God Incarnate";

  protected readonly john_1_14 = john_1_14;
}
