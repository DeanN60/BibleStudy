import {Component} from '@angular/core';
import {TheologySubMenu} from '../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-ecclesiology',
  imports: [
    TheologySubMenu,
    RightSubMenu,
    Definition
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
}
