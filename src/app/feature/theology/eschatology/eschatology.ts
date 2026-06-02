import {Component} from '@angular/core';
import {TheologySubMenu} from '../theology-sub-menu/theology-sub-menu';
import {EschatologyRightMenu} from './eschatology-right-menu/eschatology-right-menu';

@Component({
  selector: 'app-eschatology',
  imports: [
    TheologySubMenu,
    EschatologyRightMenu,
  ],
  templateUrl: './eschatology.html',
  styleUrl: './eschatology.scss',
})
export class Eschatology {

}
