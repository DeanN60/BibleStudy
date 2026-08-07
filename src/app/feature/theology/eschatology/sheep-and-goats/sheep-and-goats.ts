import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book/book';
import {matt_25_31_33, matt_25_34_40, matt_25_41_45} from '@books/Matthew/matt_25';

@Component({
  selector: 'app-sheep-and-goats',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Book
  ],
  templateUrl: './sheep-and-goats.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../eschatology.scss',
})
export class SheepAndGoats extends BasePageWithSubtitle {
  override pageSubtitle = "Eschatology - Sheep And Goats";

  protected readonly matt_25_31_33 = matt_25_31_33;
  protected readonly matt_25_34_40 = matt_25_34_40;
  protected readonly matt_25_41_45 = matt_25_41_45;
}
