import {Component, OnInit} from '@angular/core';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iiTim_3_16_17} from '@core/books/II Timothy/iiTim_3';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-infallibility-of-scripture',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './infallibility-of-scripture.html',
  styleUrl: './infallibility-of-scripture.scss',
})
export class InfallibilityOfScripture extends BasePageWithSubtitle {
  override pageSubtitle = "Infallibility of Scripture";

  protected readonly iiTimothy_3_16_17 = iiTim_3_16_17;
}
