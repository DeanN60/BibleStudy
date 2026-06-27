import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-thaddaeus',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './thaddaeus.html',
  styleUrl: '../disciples.scss',
})
export class Thaddaeus extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - Thaddaeus";

}
