import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {KeyPointsSubMenu} from '../../key-points-sub-menu/key-points-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-legio-v-macedonica',
  imports: [
    KeyPointsSubMenu,
    RightSubMenu
  ],
  templateUrl: './legio-v-macedonica.html',
  styleUrl: '../temple-destruction-seventy-ad.scss'
})
export class LegioVMacedonica extends BasePageWithSubtitle {
  override pageSubtitle = 'Temple Destruction 70 AD - Legio V Macedonica';
}
