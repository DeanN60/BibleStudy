import { Component, ChangeDetectionStrategy } from '@angular/core';
import {JesusSubMenu} from '../jesus-sub-menu/jesus-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-ministry',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './ministry.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../jesus.scss',
})
export class Ministry extends BasePageWithSubtitle {
    override pageSubtitle = "Ministry of Jesus";

}
