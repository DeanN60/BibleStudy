import { Component } from '@angular/core';
import {EschatologyRightMenu} from '../eschatology-right-menu/eschatology-right-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-pre-wrath',
  imports: [
    EschatologyRightMenu,
    TheologySubMenu
  ],
  templateUrl: './pre-wrath.html',
  styleUrl: '../eschatology.scss',
})
export class PreWrath extends BasePageWithSubtitle {
    override pageSubtitle = "Pre-Wrath";

}
