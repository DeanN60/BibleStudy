import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book/book';
import {iiCor_12_2_4} from '@books/II Corinithians/iiCor_12';

@Component({
  selector: 'app-rapture-of-paul',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './rapture-of-paul.html',
  styleUrl: '../eschatology.scss',
})
export class RaptureOfPaul extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Rapture of Paul";
  protected readonly iiCor_12_2_4 = iiCor_12_2_4;
}
