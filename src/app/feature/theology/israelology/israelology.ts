import { Component, ChangeDetectionStrategy } from '@angular/core';
import {TheologySubMenu} from '../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-israelology',
  imports: [
    TheologySubMenu,
    RightSubMenu
  ],
  templateUrl: './israelology.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './israelology.scss',
})
export class Israelology extends BasePageWithSubtitle {
    override pageSubtitle = "Israelology";

}
