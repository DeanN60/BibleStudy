import { Component } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-judas-iscariot',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './judas-iscariot.html',
  styleUrl: '../disciples.scss',
})
export class JudasIscariot extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - Judas Iscariot";

}
