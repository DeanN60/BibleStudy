import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';
import {Book} from '@core/book/book';
import {rom_3_10_18, rom_3_23} from '@books/Romans/rom_3';
import {rom_10_13, rom_10_9} from '@books/Romans/rom_10';
import {rom_8_1, rom_8_38_39} from '@books/Romans/rom_8';
import {rom_11_6} from '@books/Romans/rom_11';
import {rom_5_1, rom_5_15, rom_5_8} from '@books/Romans/rom_5';
import {rom_6_23} from '@books/Romans/rom_6';
import {eph_2_8} from '@books/Ephesians/eph_2';

@Component({
  selector: 'app-salvation',
  imports: [
    SubMenu,
    RightSubMenu,
    Definition,
    Book
  ],
  templateUrl: './salvation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './salvation.scss',
})
export class Salvation extends BasePageWithSubtitle {
  override pageSubtitle = "Salvation";

  salvationDefinition = {
    source: "Merriam-Webster",
    term: "Salvation",
    type: "noun",
    definitions: [
      {def: "deliverance from the power and effects of sin"},
      {def: "the agent or means of such saving or deliverance"}
    ]
  } as iDefinition;

  protected readonly rom_3_23 = rom_3_23;
  protected readonly rom_10_9 = rom_10_9;
  protected readonly rom_10_13 = rom_10_13;
  protected readonly rom_8_1 = rom_8_1;
  protected readonly rom_8_38_39 = rom_8_38_39;
  protected readonly rom_11_6 = rom_11_6;
  protected readonly rom_3_10_18 = rom_3_10_18;
  protected readonly rom_5_8 = rom_5_8;
  protected readonly rom_5_1 = rom_5_1;
  protected readonly rom_5_15 = rom_5_15;
  protected readonly rom_6_23 = rom_6_23;
  protected readonly eph_2_8 = eph_2_8;
}
