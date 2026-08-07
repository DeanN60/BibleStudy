import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book/book';
import {matt_9_9} from '@books/Matthew/matt_9';

@Component({
  selector: 'app-matthew',
  imports: [
    JesusSubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './matthew.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../disciples.scss',
})
export class Matthew extends BasePageWithSubtitle {
  override pageSubtitle = "Disciples - Matthew";

  protected readonly matt_9_9 = matt_9_9;
}
