import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {matt_9_9} from '@core/books/Matthew/matt_9';

@Component({
  selector: 'app-matthew',
  imports: [
    JesusSubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './matthew.html',
  styleUrl: '../disciples.scss',
})
export class Matthew extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - Matthew";

  protected readonly matt_9_9 = matt_9_9;
}
