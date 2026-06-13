import {Component} from '@angular/core';
import {SubMenu} from './doctrine-sub-menu/sub-menu';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-doctrine',
  imports: [
    SubMenu,
    Definition
  ],
  templateUrl: './doctrine.html',
  styleUrl: './doctrine.scss',
})
export class Doctrine extends BasePageWithSubtitle {
  override pageSubtitle = "Doctrine";

  doctrineDefinition = {
    source: "Merriam-Webster",
    term: "Doctrine",
    type: "noun",
    definitions: [
      {def: "a principle of position of the body of principles in a branch of knowledge of system of belief: DOGMA", sub: "Catholic doctrine"},
      {def: "a statement of fundamental government policy especially in international relations", sub: "the Truman Doctrine"},
      {def: "a principle of law established through past decisions", type: "law"},
      {def: "a military principle or set of strategies"},
      {def: "something that is taught"}
    ]
  } as iDefinition;
}
