import { Component } from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {matt_25_31_33, matt_25_34_40, matt_25_41_45} from '@core/books/Matthew/matt_25';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-sheep-and-goats',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './sheep-and-goats.html',
  styleUrl: '../eschatology.scss',
})
export class SheepAndGoats extends BasePageWithSubtitle {
  override pageSubtitle = "Sheep And Goats";

  protected readonly matt_25_31_33 = matt_25_31_33;
  protected readonly matt_25_34_40 = matt_25_34_40;
  protected readonly matt_25_41_45 = matt_25_41_45;
}
