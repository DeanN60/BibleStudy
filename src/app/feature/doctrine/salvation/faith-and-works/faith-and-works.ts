import { Component, ChangeDetectionStrategy } from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {Verse} from '@core/verse';
import {gal_2_15_21} from '@core/books/Galatians/gal_2';
import {james_2_18_26} from '@core/books/James/james_2';

@Component({
  selector: 'app-faith-and-works',
  imports: [
    RightSubMenu,
    SubMenu,
    Verse
  ],
  templateUrl: './faith-and-works.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../salvation.scss',
})
export class FaithAndWorks extends BasePageWithSubtitle {
    override pageSubtitle = "Faith and Works";

  protected readonly gal_2_15_21 = gal_2_15_21;
  protected readonly james_2_18_26 = james_2_18_26;
}
