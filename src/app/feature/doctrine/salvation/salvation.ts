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
}
