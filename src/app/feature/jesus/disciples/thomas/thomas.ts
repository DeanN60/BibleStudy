import { Component, ChangeDetectionStrategy } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {matt_10_2_4} from '@core/books/Matthew/matt_10';

@Component({
  selector: 'app-thomas',
  imports: [
    JesusSubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './thomas.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../disciples.scss',
})
export class Thomas extends BasePageWithSubtitle {
    override pageSubtitle = "Thomas - Thomas";

  protected readonly matt_10_2_4 = matt_10_2_4;
}
