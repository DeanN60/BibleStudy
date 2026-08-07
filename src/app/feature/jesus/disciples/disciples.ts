import {ChangeDetectionStrategy, Component} from '@angular/core';
import {JesusSubMenu} from '../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';
import {matt_4_18_22} from '@books/Matthew/matt_4';
import {mark_1_16_20} from '@books/Mark/mark_1';
import {luke_5_1_11} from '@books/Luke/luke_5';
import {john_1_35_51} from '@books/John/john_1';
import {matt_10_2_4} from '@books/Matthew/matt_10';
import {mark_3_13_19} from '@books/Mark/mark_3';
import {luke_6_12_16} from '@books/Luke/luke_6';

@Component({
  selector: 'app-disciples',
  imports: [
    JesusSubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './disciples.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
