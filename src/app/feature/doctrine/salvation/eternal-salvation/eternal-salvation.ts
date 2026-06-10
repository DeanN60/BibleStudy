import {Component} from '@angular/core';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {rev_3_5} from '@core/books/Revelation/rev_3';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-eternal-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './eternal-salvation.html',
  styleUrl: '../salvation.scss',
})
export class EternalSalvation extends BasePageWithSubtitle {
  readonly pageSubtitle = "Eternal Salvation";
  protected readonly rev_3_5 = rev_3_5;
}
