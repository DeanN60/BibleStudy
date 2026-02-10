import { Component } from '@angular/core';
import {SubMenu} from "../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {VerseData} from '../../../core/verse/verse-data';
import {Verse} from '../../../core/verse/verse';

@Component({
  selector: 'app-dispensation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './dispensation.html',
  styleUrl: './dispensation.scss',
})
export class Dispensation {
  iCor_9_17 = new VerseData(
    "I Corinthians 9:17",
    "17 For if I do this thing willingly, I have a reward: but if against my will, a dispensation of the gospel is committed unto me.",
    "King James Version"
  );
  eph_1_10 = new VerseData(
    "Ephesians 1:10",
    "10 That in the dispensation of the fulness of times he might gather together in one all things in Christ, both which are in heaven, and which are on earth; even in him:",
    "King James Version"
  );
  eph_3_2 = new VerseData(
    "Ephesians 3:2",
    "2 If ye have heard of the dispensation of the grace of God which is given me to you-ward:",
    "King James Version"
  );
  col_1_25 = new VerseData(
    "Colossians 1:25",
    "25 Whereof I am made a minister, according to the dispensation of God which is given to me for you, to fulfil the word of God;",
    "King James Version"
  )
}
