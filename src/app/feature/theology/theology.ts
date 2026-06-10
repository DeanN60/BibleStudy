import { Component } from '@angular/core';
import {TheologySubMenu} from './theology-sub-menu/theology-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-theology',
  imports: [
    TheologySubMenu
  ],
  templateUrl: './theology.html',
  styleUrl: './theology.scss',
})
export class Theology extends BasePageWithSubtitle {
    override pageSubtitle = "Theology";

}
