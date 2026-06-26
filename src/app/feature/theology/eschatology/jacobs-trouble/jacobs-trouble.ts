import { Component } from '@angular/core';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-jacobs-trouble',
  imports: [
    TheologySubMenu,
    RightSubMenu
  ],
  templateUrl: './jacobs-trouble.html',
  styleUrl: '../eschatology.scss',
})
export class JacobsTrouble extends BasePageWithSubtitle {
    override pageSubtitle = "Jacob`s Trouble";

}
