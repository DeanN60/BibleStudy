import { Component } from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {VerseData} from '../../../../core/verse/verse-data';
import {Verse} from '../../../../core/verse/verse';

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
  )
}
