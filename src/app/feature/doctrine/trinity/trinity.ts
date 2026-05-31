import { Component } from '@angular/core';
import {SubMenu} from "../doctrine-sub-menu/sub-menu";
import {Verse} from '@core/verse';
import {john_1_1_5} from '@core/books/John/john_1_1_5';

@Component({
  selector: 'app-trinity',
  imports: [
    SubMenu,
    Verse
  ],
  templateUrl: './trinity.html',
  styleUrl: './trinity.scss',
})
export class Trinity {

  protected readonly john_1_1_5 = john_1_1_5;
}
