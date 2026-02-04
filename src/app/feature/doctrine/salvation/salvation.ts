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
    ephesians2_8_10 = new VerseData(
      'Ephesians 2:8-10',
      '8 For by grace you have been saved through faith, and this not of yourselves, it is the gift of God; 9 not of works, so that no one may boast. 10 For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand so that we would walk in them.',
      'Bibles, Steadfast; Foundation, The Lockman . The Legacy Standard Bible - LSB (p. 3918). 316 Publishing, Inc.. Kindle Edition.'
    )
}
