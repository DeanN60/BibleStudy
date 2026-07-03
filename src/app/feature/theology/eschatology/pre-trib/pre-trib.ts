import { Component, ChangeDetectionStrategy } from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from "../right-sub-menu/right-sub-menu";
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {againstHereChap29p1} from '@core/books/Against Heresies/Book 5/chapter_29';
import {iThessalonians_4_13_18} from '@core/books/I Thessalonians/iThessalonians_4';
import {john_14_1_4} from '@core/books/John/john_14';
import {isaiah_26_19_21} from '@core/books/Isaiah/isaiah_26';
import {matt_25_34_40} from '@core/books/Matthew/matt_25';

@Component({
  selector: 'app-pre-trib',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './pre-trib.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../eschatology.scss',
})
export class PreTrib extends BasePageWithSubtitle {
    override pageSubtitle = "Pre-Tribulation";

  protected readonly againstHereChap29p1 = againstHereChap29p1;
  protected readonly iThessalonians_4_13_18 = iThessalonians_4_13_18;
  protected readonly john_14_1_4 = john_14_1_4;
  protected readonly isaiah_26_19_21 = isaiah_26_19_21;
  protected readonly matt_25_34_40 = matt_25_34_40;
}
