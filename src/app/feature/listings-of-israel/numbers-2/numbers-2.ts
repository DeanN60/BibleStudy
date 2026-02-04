import {Component} from '@angular/core';
import {LoiSubMenu} from '../loi-sub-menu/loi-sub-menu';
import {Tribe} from '../../../core/tribes/tribe/tribe';

@Component({
  selector: 'app-numbers-2',
  imports: [
    LoiSubMenu,
    Tribe
  ],
  templateUrl: './numbers-2.html',
  styleUrl: '../listings-of-israel.scss',
})
export class Numbers2 {

}
