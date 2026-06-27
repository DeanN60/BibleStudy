import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-james-son-of-zebedee',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './james-son-of-zebedee.html',
  styleUrl: '../disciples.scss',
})
export class JamesSonOfZebedee extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - James son of Zebedee";

}
