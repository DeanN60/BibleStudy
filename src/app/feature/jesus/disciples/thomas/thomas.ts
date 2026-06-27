import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-thomas',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './thomas.html',
  styleUrl: '../disciples.scss',
})
export class Thomas extends BasePageWithSubtitle {
    override pageSubtitle = "Thomas - Thomas";

}
