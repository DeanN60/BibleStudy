import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-james',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './james.html',
  styleUrl: '../disciples.scss',
})
export class James extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - James";

}
