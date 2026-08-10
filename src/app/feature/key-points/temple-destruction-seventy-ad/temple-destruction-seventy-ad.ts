import {Component} from '@angular/core';
import {KeyPointsSubMenu} from '../key-points-sub-menu/key-points-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-temple-destruction-seventy-ad',
  imports: [
    KeyPointsSubMenu
  ],
  templateUrl: './temple-destruction-seventy-ad.html',
  styleUrl: '../key-points.scss',
})
export class TempleDestructionSeventyAd extends BasePageWithSubtitle {
  override pageSubtitle = 'Key Points - Temple Destruction 70AD';

}
