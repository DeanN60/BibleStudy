import {Component, ChangeDetectionStrategy} from '@angular/core';
import {SubMenu} from "../doctrine-sub-menu/sub-menu";
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-calvinism',
  imports: [
    SubMenu,
    RightSubMenu,
    Definition
  ],
  templateUrl: './calvinism.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './calvinism.scss',
})
export class Calvinism extends BasePageWithSubtitle {
  override pageSubtitle = "Calvinism";

  calvinismDefinition = {
    source: "Merriam-Webster",
    term: "Calvinism",
    type: "noun",
    definitions: [
      {def: "the theological system of Calvin and his followers marked by strong emphasis on the sovereignty of God," +
          " the depravity of humankind, and the doctrine of predestination"}
    ]
  } as iDefinition;

}
