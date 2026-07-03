import { Component, ChangeDetectionStrategy } from '@angular/core';
import {LoiSubMenu} from './loi-sub-menu/loi-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-listings-of-israel',
  imports: [
    LoiSubMenu
  ],
  templateUrl: './listings-of-israel.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './listings-of-israel.scss',
})
export class ListingsOfIsrael extends BasePageWithSubtitle {
    override pageSubtitle= "Listings of Israel";

}
