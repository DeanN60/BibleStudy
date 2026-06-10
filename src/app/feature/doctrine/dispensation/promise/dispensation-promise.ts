import { Component } from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-promise',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './dispensation-promise.html',
  styleUrl: '../dispensation.scss',
})
export class DispensationPromise extends BasePageWithSubtitle {
    override pageSubtitle = "Dispensation of the Promise";

}
