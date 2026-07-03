import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TheologySubMenu} from './theology-sub-menu/theology-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-theology',
  imports: [
    TheologySubMenu,
    Definition
  ],
  templateUrl: './theology.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './theology.scss',
})
export class Theology extends BasePageWithSubtitle {
  override pageSubtitle = "Theology";

  theologyDefinition = {
    source: "Merriam-Webster",
    term: "Theology",
    type: "noun",
    definitions: [
      {def: "the study of religious faith, practice, and experience"},
      {type: "especially", def: "the study of God and of God's relation to the world"}
    ]
  } as iDefinition;
}
