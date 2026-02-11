import { Component } from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {VerseData} from '@core/verse-data';
import {Verse} from '@core/verse';

@Component({
  selector: 'app-gift-of-god',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './gift-of-god.html',
  styleUrl: '../salvation.scss',
})
export class GiftOfGod {
  ephesians2_8 = new VerseData(
    'Ephesians 2:8',
    '8 For by grace you have been saved through faith, and this not of yourselves, it is the gift of God;',
    'Bibles, Steadfast; Foundation, The Lockman . The Legacy Standard Bible - LSB (p. 3918). 316 Publishing, Inc.. Kindle Edition.'
  );
}
