import { Component } from '@angular/core';
import {HomeSubMenu} from './home-sub-menu/home-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-home',
  imports: [
    HomeSubMenu
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home extends BasePageWithSubtitle {
    override pageSubtitle = "Home";

}
