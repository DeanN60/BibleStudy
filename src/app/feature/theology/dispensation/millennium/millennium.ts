import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';

@Component({
  selector: 'app-millennium',
  imports: [
    RightSubMenu,
    TheologySubMenu
  ],
  templateUrl: './millennium.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../dispensation.scss',
})
export class Millennium extends BasePageWithSubtitle {
    override pageSubtitle = "Dispensation of the Millennium";

}
