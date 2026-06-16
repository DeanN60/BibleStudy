import {Component, OnInit} from '@angular/core';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Verse} from '@core/verse';
import {iiTim_3_16_17} from '@core/books/II Timothy/iiTim_3';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-infallibility-of-scripture',
  imports: [
    SubMenu,
    RightSubMenu,
    Verse,
    Definition
  ],
  templateUrl: './infallibility-of-scripture.html',
  styleUrl: './infallibility-of-scripture.scss',
})
export class InfallibilityOfScripture extends BasePageWithSubtitle {
  override pageSubtitle = "Infallibility of Scripture";

  infallibilityDefinition = {
    source: "Merriam-Webster",
    term: "Infallibility",
    type: "noun",
    definitions: [
      {def: "the quality or state of being infallible"}
    ]
  } as iDefinition;

  protected readonly iiTimothy_3_16_17 = iiTim_3_16_17;
}
