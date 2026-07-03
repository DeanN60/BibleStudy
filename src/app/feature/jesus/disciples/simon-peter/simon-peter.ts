import { Component, ChangeDetectionStrategy } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-simon-peter',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './simon-peter.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../disciples.scss',
})
export class SimonPeter extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - Simon Peter";

}
