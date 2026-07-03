import { Component, ChangeDetectionStrategy } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-simon-the-zealot',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './simon-the-zealot.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../disciples.scss',
})
export class SimonTheZealot extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - Simon the Zealot";

}
