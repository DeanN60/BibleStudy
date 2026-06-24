import { Component } from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-pre-wrath',
  imports: [
    RightSubMenu,
    TheologySubMenu
  ],
  templateUrl: './pre-wrath.html',
  styleUrl: '../eschatology.scss',
})
export class PreWrath extends BasePageWithSubtitle {
    override pageSubtitle = "Pre-Wrath";

}
