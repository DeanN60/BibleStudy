import {Component} from '@angular/core';
import {TheologySubMenu} from '../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';
import {Verse} from '@core/verse';
import {iCor_12_27_30} from '@core/books/I Corinthians/iCor_12';
import {rom_12_4_8} from '@core/books/Romans/rom_12';
import {eph_1_22_23} from '@core/books/Ephesians/eph_1';
import {eph_4_11_16} from '@core/books/Ephesians/eph_4';
import {col_1_24_29} from '@core/books/Colossians/col_1';

@Component({
  selector: 'app-ecclesiology',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Definition,
    Verse
  ],
  templateUrl: './ecclesiology.html',
  styleUrl: './ecclesiology.scss',
})
export class Ecclesiology extends BasePageWithSubtitle {
  override pageSubtitle = "Ecclesiology";

  ecclesiologyDefinition = {
    source: "Merriam-Webster",
    term: "Ecclesiology",
    type: "noun",
    definitions: [
      {def: "the study of church architecture and adornment"},
      {def: "theological doctrine relating to the church"}
    ]
  } as iDefinition;
  protected readonly iCor_12_27_30 = iCor_12_27_30;
  protected readonly rom_12_4_8 = rom_12_4_8;
  protected readonly eph_1_22_23 = eph_1_22_23;
  protected readonly eph_4_11_16 = eph_4_11_16;
  protected readonly col_1_24_29 = col_1_24_29;
}
