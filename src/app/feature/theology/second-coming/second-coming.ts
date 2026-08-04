import {Component} from '@angular/core';
import {TheologySubMenu} from "../theology-sub-menu/theology-sub-menu";
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-second-coming',
  imports: [
    TheologySubMenu,
    RightSubMenu
  ],
  templateUrl: './second-coming.html',
  styleUrl: './second-coming.scss',
})
export class SecondComing extends BasePageWithSubtitle {
  override pageSubtitle = 'Second Coming';
}
