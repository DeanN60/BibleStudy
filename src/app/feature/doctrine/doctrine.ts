import {Component} from '@angular/core';
import {SubMenu} from './doctrine-sub-menu/sub-menu';

@Component({
  selector: 'app-doctrine',
  imports: [
    SubMenu
  ],
  templateUrl: './doctrine.html',
  styleUrl: './doctrine.scss',
})
export class Doctrine {
}
