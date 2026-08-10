import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {Book} from '@core/book';
import {john_14_6} from '@books/John/john_14';
import {iJohn_5_11_12} from '@books/I John/iJohn_5';

@Component({
  selector: 'app-sola-christus',
  imports: [
    FiveSolasSubMenu,
    Book
  ],
  templateUrl: './sola-christus.html',
  styleUrl: '../five-solas.scss',
})
export class SolaChristus extends BasePageWithSubtitle {
    override pageSubtitle = 'Five Sola - Sola Christus';

  protected readonly john_14_6 = john_14_6;
  protected readonly iJohn_5_11_12 = iJohn_5_11_12;
}
