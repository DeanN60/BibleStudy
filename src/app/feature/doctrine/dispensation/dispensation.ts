import {Component} from '@angular/core';
import {SubMenu} from "../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iCor_9_17} from '@core/books/I Corinthians/iCor_9';
import {eph_1_10} from '@core/books/Ephesians/eph_1';
import {eph_3_2} from '@core/books/Ephesians/eph_3';
import {col_1_25} from '@core/books/Colossians/col_1';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';
import {
  dispensation_1_18,
  dispensation_1_19,
  dispensation_1_7
} from '@core/books/Dispensationalism Before Darby/chap_1';

@Component({
  selector: 'app-dispensation',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse,
    Definition
  ],
  templateUrl: './dispensation.html',
  styleUrl: './dispensation.scss',
})
export class Dispensation extends BasePageWithSubtitle {
  override pageSubtitle = "Dispensation";

  dispensationalismDefinition = {
    source: "Merriam-Webster",
    term: "Dispensationalism",
    type: "noun",
    definitions: [
      {def: "adherence to or advocacy of a system of interpreting history in terms of a series of God's dispensations"}
    ]
  } as iDefinition;


  protected readonly iCor_9_17 = iCor_9_17;
  protected readonly eph_1_10 = eph_1_10;
  protected readonly eph_3_2 = eph_3_2;
  protected readonly col_1_25 = col_1_25;
  protected readonly dispensation_1_7 = dispensation_1_7;
  protected readonly dispensation_1_18 = dispensation_1_18;
  protected readonly dispensation_1_19 = dispensation_1_19;
}
