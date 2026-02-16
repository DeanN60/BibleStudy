import {Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iiTim_3_16_17} from '@core/books/II Timothy/iiTim_3';

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
  protected readonly iiTimothy_3_16_17 = iiTim_3_16_17;
}
