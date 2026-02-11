import { Component } from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {VerseData} from '../../../../core/verse/verse-data';
import {Verse} from '../../../../core/verse/verse';

@Component({
  selector: 'app-god-breathed',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './god-breathed.html',
  styleUrl: '../infallibility-of-scripture.scss',
})
export class GodBreathed {
  iiTimothy3_16_17 = new VerseData(
    "II Timothy 3:16-17",
    "16 All Scripture is God-breathed and profitable for teaching, for reproof, for correction, for training in righteousness, 17 so that the man of God may be equipped, having been thoroughly equipped for every good work.",
    "Bibles, Steadfast; Foundation, The Lockman . The Legacy Standard Bible - LSB (p. 3998). 316 Publishing, Inc.. Kindle Edition."
  );
}
