import { Component, ChangeDetectionStrategy } from '@angular/core';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-healing',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './healing.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../ministry.scss',
})
export class Healing {

}
