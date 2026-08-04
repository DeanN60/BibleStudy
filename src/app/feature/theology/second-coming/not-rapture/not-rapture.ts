import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-not-rapture',
  imports: [
    TheologySubMenu,
    RightSubMenu
  ],
  templateUrl: './not-rapture.html',
  styleUrl: '../second-coming.scss',
})
export class NotRapture extends BasePageWithSubtitle {
    override pageSubtitle = 'Second Coming - Not Rapture';
}
