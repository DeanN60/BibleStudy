import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {KeyPointsSubMenu} from '../../key-points-sub-menu/key-points-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-legio-x-fretensis',
  imports: [
    KeyPointsSubMenu,
    RightSubMenu
  ],
  templateUrl: './legio-x-fretensis.html',
  styleUrl: '../temple-destruction-seventy-ad.scss',
})
export class LegioXFretensis extends BasePageWithSubtitle {
    override pageSubtitle = 'Temple Destruction 70 AD - Legio X Fretensis';

}
