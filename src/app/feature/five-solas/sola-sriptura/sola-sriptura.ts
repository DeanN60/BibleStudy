import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {Book} from '@core/book';
import {iiTim_3_16_17} from '@books/II Timothy/iiTim_3';

@Component({
  selector: 'app-sola-sriptura',
  imports: [
    FiveSolasSubMenu,
    Book
  ],
  templateUrl: './sola-sriptura.html',
  styleUrl: '../five-solas.scss',
})
export class SolaSriptura extends BasePageWithSubtitle {
    override pageSubtitle = 'Five Sola - Sola Scriptura';

  protected readonly iiTim_3_16_17 = iiTim_3_16_17;
}
