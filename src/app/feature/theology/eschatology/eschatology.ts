import {Component} from '@angular/core';
import {TheologySubMenu} from '../theology-sub-menu/theology-sub-menu';
import {EschatologyRightMenu} from './eschatology-right-menu/eschatology-right-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-eschatology',
  imports: [
    TheologySubMenu,
    EschatologyRightMenu,
    Definition,
  ],
  templateUrl: './eschatology.html',
  styleUrl: './eschatology.scss',
})
export class Eschatology extends BasePageWithSubtitle {
    override pageSubtitle = "Eschatology";

  eschatologyDefinition = {
    source: "Merriam-Webster",
    term: "Eschatology",
    type: "noun",
    definitions: [
      {def: "a branch of theology concerned with the final events in the history of the world or of humankind"},
      {def: "a belief concerning death, the end of the world, or the ultimate destiny of humankind"}
    ]
  } as iDefinition;
}
