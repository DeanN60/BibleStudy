import { Component } from '@angular/core';
import {Panel} from 'primeng/panel';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';

@Component({
  selector: 'app-salvation',
  imports: [
    Panel,
    SubMenu
  ],
  templateUrl: './salvation.html',
  styleUrl: './salvation.scss',
})
export class Salvation {

}
