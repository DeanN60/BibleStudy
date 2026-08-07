import {ChangeDetectionStrategy, Component} from '@angular/core';
import {JesusSubMenu} from '../jesus-sub-menu/jesus-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';
import {john_1_14} from '@books/John/john_1';

@Component({
  selector: 'app-incarnate',
  imports: [
    JesusSubMenu,
    Book
  ],
  templateUrl: './incarnate.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../jesus.scss',
})
export class Incarnate extends BasePageWithSubtitle {
  override pageSubtitle = "God Incarnate";

  protected readonly john_1_14 = john_1_14;
}
