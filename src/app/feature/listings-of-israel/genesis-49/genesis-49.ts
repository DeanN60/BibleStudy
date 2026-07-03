import { Component, ChangeDetectionStrategy } from '@angular/core';
import {LoiSubMenu} from "../loi-sub-menu/loi-sub-menu";
import {Tribe} from '@core/tribe/tribe';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-genesis-49',
  imports: [
    LoiSubMenu,
    Tribe
  ],
  templateUrl: './genesis-49.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../listings-of-israel.scss',
})
export class Genesis49 extends BasePageWithSubtitle {
    override pageSubtitle = "Genesis 49 Listing";

}
