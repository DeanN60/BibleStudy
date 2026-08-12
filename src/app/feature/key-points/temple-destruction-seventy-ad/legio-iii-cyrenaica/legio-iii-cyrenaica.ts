import {Component} from '@angular/core';
import {KeyPointsSubMenu} from '../../key-points-sub-menu/key-points-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-legio-iii-cyrenaica',
  imports: [
    KeyPointsSubMenu,
    RightSubMenu
  ],
  templateUrl: './legio-iii-cyrenaica.html',
  styleUrl: '../temple-destruction-seventy-ad.scss',
})
export class LegioIiiCyrenaica extends BasePageWithSubtitle {
  override pageSubtitle = 'Temple Destruction 70 AD - Legio III Cyrenaica';

}
