import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {Book} from '@core/book';
import {isaiah_42_8} from '@books/Isaiah/isaiah_42';
import {isaiah_48_11} from '@books/Isaiah/isaiah_48';

@Component({
  selector: 'app-sola-deo-gloria',
  imports: [
    FiveSolasSubMenu,
    Book
  ],
  templateUrl: './sola-deo-gloria.html',
  styleUrl: '../five-solas.scss',
})
export class SolaDeoGloria extends BasePageWithSubtitle {
    override pageSubtitle = 'Five Sola - Sola Deo Gloria';

  protected readonly isaiah_42_8 = isaiah_42_8;
  protected readonly isaiah_48_11 = isaiah_48_11;
}
