import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SubMenu} from "../../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {rom_9_11_16} from '@core/books/Romans/rom_9';
import {Verse} from '@core/verse';
import {eph_1_1_11} from '@core/books/Ephesians/eph_1';
import {iiTim_1_9} from '@core/books/II Timothy/iiTim_1';
import {john_6_37} from '@core/books/John/john_6';
import {john_15_16} from '@core/books/John/john_15';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-unconditional-election',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse
  ],
  templateUrl: './unconditional-election.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../calvinism.scss',
})
export class UnconditionalElection extends BasePageWithSubtitle {
  override pageSubtitle = "Unconditional Election";

  protected readonly rom_9_11_16 = rom_9_11_16;
  protected readonly eph_1_1_11 = eph_1_1_11;
  protected readonly iiTim_1_9 = iiTim_1_9;
  protected readonly john_6_37 = john_6_37;
  protected readonly john_15_16 = john_15_16;
}
