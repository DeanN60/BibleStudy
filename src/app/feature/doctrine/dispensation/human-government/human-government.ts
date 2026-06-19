import {Component} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Verse} from '@core/verse';
import {gen_8_20_21} from '@core/books/Genesis/gen_8';
import {gen_11_1_9} from '@core/books/Genesis/gen_11';

@Component({
  selector: 'app-human-government',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './human-government.html',
  styleUrl: '../dispensation.scss',
})
export class HumanGovernment extends BasePageWithSubtitle {
    override pageSubtitle = "Dispensation of Human Government";

  protected readonly gen_8_20_21 = gen_8_20_21;
  protected readonly gen_11_1_9 = gen_11_1_9;
}
