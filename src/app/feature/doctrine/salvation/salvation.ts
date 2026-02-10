import {Component} from '@angular/core';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '../../../core/verse/verse';
import {VerseData} from '../../../core/verse/verse-data';

@Component({
  selector: 'app-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './salvation.html',
  styleUrl: './salvation.scss',
})
export class Salvation {
  rom_5_15 = new VerseData(
    "Romans 5:15",
    "15 But not as the offence, so also is the free gift. For if through the offence of one many be dead, much more the grace of God, and the gift by grace, which is by one man, Jesus Christ, hath abounded unto many.",
    "King James Version"
  );
  rom_11_6 = new VerseData(
    "Romans 11:6",
    "6 And if by grace, then is it no more of works: otherwise grace is no more grace. But if it be of works, then is it no more grace: otherwise work is no more work.",
    "King James Version"
  );
}
