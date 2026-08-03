import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-rapture',
  imports: [
    TheologySubMenu,
    RightSubMenu
  ],
  templateUrl: './rapture.html',
  styleUrl: './rapture.scss',
})
export class Rapture extends BasePageWithSubtitle {
    override pageSubtitle = 'Rapture';

}
