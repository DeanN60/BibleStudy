import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-resurrection',
  imports: [
    SubMenu,
    Definition
  ],
  templateUrl: './resurrection.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../doctrine.scss',
})
export class Resurrection extends BasePageWithSubtitle {
  override pageSubtitle = "Resurrection";

  resurrectionDefinition = {
    source: "Merriam-Webster",
    term: "Resurrection",
    type: "noun",
    definitions: [
      {type: "Resurrection", def: "the rising of Christ from the dead"},
      {type: "often Resurrection", def: "the rising again to life of all the human dead before the final judgment"},
      {def: "the state of one risen from the dead"}
    ]
  } as iDefinition;
}
