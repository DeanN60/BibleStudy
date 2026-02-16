import { Component } from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {VerseData} from '@core/verse-data';
import {Verse} from '@core/verse';

@Component({
  selector: 'app-not-of-works',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './not-of-works.html',
  styleUrl: '../salvation.scss',
})
export class NotOfWorks {
  ephesians2_9_10 = new VerseData(
    'Ephesians 2:9-10',
    '9 not of works, so that no one may boast. 10 For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand so that we would walk in them.',
    'Bibles, Steadfast; Foundation, The Lockman . The Legacy Standard Bible - LSB (p. 3918). 316 Publishing, Inc.. Kindle Edition.'
  );
  rom_4_4 = new VerseData(
    "Romans 4:4",
    "4 Now to him that worketh is the reward not reckoned of grace, but of debt.",
    "King James Version"
  );
  rom_4_5 = new VerseData(
    "Romans 4:5",
    "5 But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness.",
    "King James Version"
  )
}
