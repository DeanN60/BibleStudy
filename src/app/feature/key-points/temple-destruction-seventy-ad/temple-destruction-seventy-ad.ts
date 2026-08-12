import {Component} from '@angular/core';
import {KeyPointsSubMenu} from '../key-points-sub-menu/key-points-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Book} from '@core/book';
import {daniel_9_26} from '@books/Daniel/daniel_9';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-temple-destruction-seventy-ad',
  imports: [
    KeyPointsSubMenu,
    Book,
    RightSubMenu
  ],
  templateUrl: './temple-destruction-seventy-ad.html',
  styleUrls: ['../key-points.scss', './temple-destruction-seventy-ad.scss']
})
export class TempleDestructionSeventyAd extends BasePageWithSubtitle {
  override pageSubtitle = 'Key Points - Temple Destruction 70AD';

  protected readonly daniel_9_26 = daniel_9_26;
}
