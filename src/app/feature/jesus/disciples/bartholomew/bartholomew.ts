import { Component, ChangeDetectionStrategy } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-bartholomew',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './bartholomew.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../disciples.scss',
})
export class Bartholomew extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - Bartholomew";

}
