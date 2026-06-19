import { Component } from '@angular/core';
import {HomeSubMenu} from './home-sub-menu/home-sub-menu';

@Component({
  selector: 'app-home',
  imports: [
    HomeSubMenu
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
