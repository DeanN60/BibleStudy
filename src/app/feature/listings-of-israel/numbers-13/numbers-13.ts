import {Component, OnInit} from '@angular/core';
import {LoiSubMenu} from '../loi-sub-menu/loi-sub-menu';
import {Tribe} from '@core/tribe/tribe';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-numbers-13',
  imports: [
    LoiSubMenu,
    Tribe
  ],
  templateUrl: './numbers-13.html',
  styleUrl: '../listings-of-israel.scss',
})
export class Numbers13 extends BasePageWithSubtitle {
    override pageSubtitle= "Numbers 13 Listing";

}
