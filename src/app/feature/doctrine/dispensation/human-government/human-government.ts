import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-human-government',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './human-government.html',
  styleUrl: '../dispensation.scss',
})
export class HumanGovernment extends BasePageWithSubtitle {
    override pageSubtitle = "Dispensation of Human Government";

}
