import { Component, ChangeDetectionStrategy } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-james-son-of-alphaeus',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './james-son-of-alphaeus.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../disciples.scss',
})
export class JamesSonOfAlphaeus extends BasePageWithSubtitle {
    override pageSubtitle = "Disciples - James son of Alphaeus";

}
