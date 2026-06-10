import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-innocence',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './innocence.html',
  styleUrl: '../dispensation.scss',
})
export class Innocence extends BasePageWithSubtitle {
    override pageSubtitle = "Dispensation of the Innocence";

}
