import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {john_10_11_15, john_10_26} from '@core/books/John/john_10';

@Component({
  selector: 'app-limited-atonement',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './limited-atonement.html',
  styleUrl: '../calvinism.scss',
})
export class LimitedAtonement {

  protected readonly john_10_11_15 = john_10_11_15;
  protected readonly john_10_26 = john_10_26;
}
