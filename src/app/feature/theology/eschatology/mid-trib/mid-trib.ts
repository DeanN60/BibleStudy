import {Component} from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-mid-trib',
  imports: [
    TheologySubMenu,
    RightSubMenu
  ],
  templateUrl: './mid-trib.html',
  styleUrl: '../eschatology.scss',
})
export class MidTrib extends BasePageWithSubtitle {
  override pageSubtitle = "Mid-Tribulation";

}
