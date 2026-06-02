import { Component } from '@angular/core';
import {JesusSubMenu} from '../jesus-sub-menu/jesus-sub-menu';
import {Verse} from '@core/verse';
import {john_1_14} from '@core/books/John/john_1';

@Component({
  selector: 'app-incarnate',
  imports: [
    JesusSubMenu,
    Verse
  ],
  templateUrl: './incarnate.html',
  styleUrl: '../jesus.scss',
})
export class Incarnate {

  protected readonly john_1_14 = john_1_14;
}
