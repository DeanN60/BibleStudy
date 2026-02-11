import { Component } from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {VerseData} from '@core/verse-data';
import {Verse} from '@core/verse';

@Component({
  selector: 'app-need-for-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './need-for-salvation.html',
  styleUrl: '../salvation.scss',
})
export class NeedForSalvation {
  allHaveSined = new VerseData(
    "Romans 3:23",
    "23 for all have sinned and fall short of the glory of God, 24 being justified as a gift by His grace through the redemption which is in Christ Jesus; 25 whom God displayed publicly as a propitiation in His blood through faith, for a demonstration of His righteousness, because in the forbearance of God He passed over the sins previously committed; 26 for the demonstration of His righteousness at the present time, so that He would be just and the justifier of the one who has faith in Jesus.",
    "Bibles, Steadfast; Foundation, The Lockman . The Legacy Standard Bible - LSB (p. 3772). 316 Publishing, Inc.. Kindle Edition."
  )
}
