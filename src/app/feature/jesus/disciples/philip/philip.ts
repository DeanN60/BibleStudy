import { Component } from '@angular/core';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-philip',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './philip.html',
  styleUrl: '../disciples.scss',
})
export class Philip extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - Philip";

}
