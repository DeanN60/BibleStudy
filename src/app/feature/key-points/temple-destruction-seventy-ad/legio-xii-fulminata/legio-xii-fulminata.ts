import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {KeyPointsSubMenu} from '../../key-points-sub-menu/key-points-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-legio-xii-fulminata',
  imports: [
    KeyPointsSubMenu,
    RightSubMenu
  ],
  templateUrl: './legio-xii-fulminata.html',
  styleUrl: '../temple-destruction-seventy-ad.scss',
})
export class LegioXiiFulminata extends BasePageWithSubtitle {
  override pageSubtitle = 'Temple Destruction 70 AD - Legio XII Fulminata';
}
