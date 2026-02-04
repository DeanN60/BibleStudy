import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-unconditional-election',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './unconditional-election.html',
  styleUrl: '../calvinism.scss',
})
export class UnconditionalElection {

}
