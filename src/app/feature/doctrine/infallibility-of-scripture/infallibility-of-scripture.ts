import {Component} from '@angular/core';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';

@Component({
  selector: 'app-infallibility-of-scripture',
  imports: [
    SubMenu,
    RightSubMenu
  ],
  templateUrl: './infallibility-of-scripture.html',
  styleUrl: './infallibility-of-scripture.scss',
})
export class InfallibilityOfScripture {

}
