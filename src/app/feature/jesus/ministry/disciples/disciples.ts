import { Component } from '@angular/core';
import {JesusSubMenu} from '../../jesus-sub-menu/jesus-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-disciples',
  imports: [
    JesusSubMenu,
    RightSubMenu
  ],
  templateUrl: './disciples.html',
  styleUrl: '../ministry.scss',
})
export class Disciples {

}
