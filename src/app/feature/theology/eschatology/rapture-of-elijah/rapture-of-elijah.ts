import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book/book';
import {iiKings_2_11_12} from '@books/II Kings/iiKings_2';

@Component({
  selector: 'app-rapture-of-elijah',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './rapture-of-elijah.html',
  styleUrl: '../eschatology.scss',
})
export class RaptureOfElijah extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Rapture of Elijah";
  protected readonly iiKings_2_11_12 = iiKings_2_11_12;
}
