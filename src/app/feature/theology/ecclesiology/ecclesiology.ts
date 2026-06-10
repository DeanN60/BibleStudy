import {Component} from '@angular/core';
import {TheologySubMenu} from '../theology-sub-menu/theology-sub-menu';
import {EcclesiologySubMenu} from './ecclesiology-sub-menu/ecclesiology-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-ecclesiology',
  imports: [
    TheologySubMenu,
    EcclesiologySubMenu
  ],
  templateUrl: './ecclesiology.html',
  styleUrl: './ecclesiology.scss',
})
export class Ecclesiology extends BasePageWithSubtitle {
  override pageSubtitle = "Ecclesiology";

}
