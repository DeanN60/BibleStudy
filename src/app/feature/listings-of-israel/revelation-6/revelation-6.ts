import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {LoiSubMenu} from '../loi-sub-menu/loi-sub-menu';
import {Tribe} from '@core/tribe/tribe';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-revelation-6',
  imports: [
    LoiSubMenu,
    Tribe
  ],
  templateUrl: './revelation-6.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../listings-of-israel.scss',
})
export class Revelation6 extends BasePageWithSubtitle {
    override pageSubtitle = "Revelation 6 Listing";

}
