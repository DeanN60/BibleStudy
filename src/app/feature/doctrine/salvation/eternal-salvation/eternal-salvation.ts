import { Component } from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {VerseData} from '@core/verse-data';
import {Verse} from '@core/verse';

@Component({
  selector: 'app-eternal-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './eternal-salvation.html',
  styleUrl: '../salvation.scss',
})
export class EternalSalvation {
    rev_3_5 = new VerseData(
      "Revelation 3:5",
      "5 He that overcometh, the same shall be clothed in white raiment; and I will not blot out his name out of the book of life, but I will confess his name before my Father, and before his angels.",
      "King James Version"
    )
}
