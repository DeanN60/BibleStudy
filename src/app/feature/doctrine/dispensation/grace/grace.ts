import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-grace',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './grace.html',
  styleUrl: '../dispensation.scss',
})
export class Grace extends BasePageWithSubtitle {
    override pageSubtitle = "Dispensation of Grace";

}
