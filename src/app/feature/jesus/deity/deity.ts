import {ChangeDetectionStrategy, Component} from '@angular/core';
import {JesusSubMenu} from '../jesus-sub-menu/jesus-sub-menu';
import {john_1_1_5} from '@books/John/john_1';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';

@Component({
  selector: 'app-deity',
  imports: [
    JesusSubMenu,
    Book
  ],
  templateUrl: './deity.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../jesus.scss',
})
export class Deity extends BasePageWithSubtitle {
  override pageSubtitle = "Deity";
  protected readonly john_1_1_5 = john_1_1_5;
}
