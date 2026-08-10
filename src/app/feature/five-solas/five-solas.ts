import {Component} from '@angular/core';
import {FiveSolasSubMenu} from './five-solas-sub-menu/five-solas-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-five-solas',
  imports: [
    FiveSolasSubMenu
  ],
  templateUrl: './five-solas.html',
  styleUrl: './five-solas.scss',
})
export class FiveSolas extends BasePageWithSubtitle {
  override pageSubtitle = "Five Solas";
}
