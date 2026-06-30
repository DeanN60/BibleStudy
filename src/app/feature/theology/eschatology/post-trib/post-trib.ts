import { Component } from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {rom_11_17_24} from '@core/books/Romans/rom_11';
import {john_15_1_11} from '@core/books/John/john_15';
import {matt_25_41_45} from '@core/books/Matthew/matt_25';
import {matt_24_36} from '@core/books/Matthew/matt_24';

@Component({
  selector: 'app-post-trib',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './post-trib.html',
  styleUrl: '../eschatology.scss',
})
export class PostTrib extends BasePageWithSubtitle {
    override pageSubtitle = "Post-Tribulation";

  protected readonly rom_11_17_24 = rom_11_17_24;
  protected readonly john_15_1_11 = john_15_1_11;
  protected readonly matt_25_41_45 = matt_25_41_45;
  protected readonly matt_24_36 = matt_24_36;
}
