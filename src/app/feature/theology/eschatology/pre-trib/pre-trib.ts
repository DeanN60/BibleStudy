import { Component } from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {EschatologyRightMenu} from "../eschatology-right-menu/eschatology-right-menu";
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {againstHereChap29p1} from '@core/books/Against Heresies/Book 5/chapter_29';

@Component({
  selector: 'app-pre-trib',
  imports: [
    TheologySubMenu,
    EschatologyRightMenu,
    Verse
  ],
  templateUrl: './pre-trib.html',
  styleUrl: '../eschatology.scss',
})
export class PreTrib extends BasePageWithSubtitle {
    override pageSubtitle = "Pre-Tribulation";

  protected readonly againstHereChap29p1 = againstHereChap29p1;
}
