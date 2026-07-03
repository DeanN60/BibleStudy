import { Component, ChangeDetectionStrategy } from '@angular/core';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-andrew',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './andrew.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../disciples.scss',
})
export class Andrew extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - Andrew";

}
