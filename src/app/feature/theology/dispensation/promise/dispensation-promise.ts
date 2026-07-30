import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';

@Component({
  selector: 'app-promise',
  imports: [
    TheologySubMenu,
    RightSubMenu
  ],
  templateUrl: './dispensation-promise.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../dispensation.scss',
})
export class DispensationPromise extends BasePageWithSubtitle {
    override pageSubtitle = "Dispensation of the Promise";

}
