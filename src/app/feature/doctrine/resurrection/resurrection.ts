import { Component } from '@angular/core';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-resurrection',
  imports: [
    SubMenu
  ],
  templateUrl: './resurrection.html',
  styleUrl: '../doctrine.scss',
})
export class Resurrection extends BasePageWithSubtitle {
    override pageSubtitle = "Resurrection";
}
