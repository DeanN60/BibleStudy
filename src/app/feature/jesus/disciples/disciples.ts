import { Component } from '@angular/core';
import {JesusSubMenu} from '../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {matt_4_18_22} from '@core/books/Matthew/matt_4';
import {mark_1_16_20} from '@core/books/Mark/mark_1';
import {luke_5_1_11} from '@core/books/Luke/luke_5';
import {john_1_35_51} from '@core/books/John/john_1';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {matt_10_2_4} from '@core/books/Matthew/matt_10';
import {mark_3_13_19} from '@core/books/Mark/mark_3';
import {luke_6_12_16} from '@core/books/Luke/luke_6';

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
  protected readonly matt_10_2_4 = matt_10_2_4;
  protected readonly mark_3_13_19 = mark_3_13_19;
  protected readonly luke_6_12_16 = luke_6_12_16;
}
