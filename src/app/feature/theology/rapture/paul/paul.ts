import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {Verse} from '@core/verse';
import {iiCor_12_2_4} from '@core/books/II Corinithians/iiCor_12';

@Component({
  selector: 'app-paul',
  imports: [
    RightSubMenu,
    TheologySubMenu,
    Verse
  ],
  templateUrl: './paul.html',
  styleUrl: '../rapture.scss',
})
export class Paul extends BasePageWithSubtitle {
  override pageSubtitle = 'Rapture - Paul';
  protected readonly iiCor_12_2_4 = iiCor_12_2_4;
}
