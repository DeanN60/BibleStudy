import { Component } from '@angular/core';
import {JesusSubMenu} from '../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {matt_4_18_22} from '@core/books/Matthew/matt_4';
import {mark_1_16_20} from '@core/books/Mark/mark_1';
import {luke_5_1_11} from '@core/books/Luke/luke_5';
import {john_1_35_51} from '@core/books/John/john_1';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-disciples',
  imports: [
    JesusSubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './disciples.html',
  styleUrl: './disciples.scss',
})
export class Disciples extends BasePageWithSubtitle {
  override pageSubtitle = "Disciples";

  protected readonly matt_4_18_22 = matt_4_18_22;
  protected readonly mark_1_16_20 = mark_1_16_20;
  protected readonly luke_5_1_11 = luke_5_1_11;
  protected readonly john_1_35_51 = john_1_35_51;
}
