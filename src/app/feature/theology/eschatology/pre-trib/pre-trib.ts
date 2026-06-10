import { Component } from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {EschatologyRightMenu} from "../eschatology-right-menu/eschatology-right-menu";
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-pre-trib',
  imports: [
    TheologySubMenu,
    EschatologyRightMenu
  ],
  templateUrl: './pre-trib.html',
  styleUrl: '../eschatology.scss',
})
export class PreTrib extends BasePageWithSubtitle {
    override pageSubtitle = "Pre-Tribulation";

}
