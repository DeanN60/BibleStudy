import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {Book} from '@core/book/book';
import {acts_8_39_40} from '@books/Acts/acts_8';

@Component({
  selector: 'app-rapture-of-philip',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Book
  ],
  templateUrl: './rapture-of-philip.html',
  styleUrl: '../eschatology.scss',
})
export class RaptureOfPhilip extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Rapture of Philip";
  protected readonly acts_8_39_40 = acts_8_39_40;
}
