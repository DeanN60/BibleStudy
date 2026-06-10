import {Component} from '@angular/core';
import {LoiSubMenu} from '../loi-sub-menu/loi-sub-menu';
import {Tribe} from '@core/tribe/tribe';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-numbers-2',
  imports: [
    LoiSubMenu,
    Tribe
  ],
  templateUrl: './numbers-2.html',
  styleUrl: '../listings-of-israel.scss',
})
export class Numbers2 extends BasePageWithSubtitle {
    override pageSubtitle = "Numbers 2 Listing";

}
