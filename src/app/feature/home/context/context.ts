import {Component} from '@angular/core';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {HomeSubMenu} from '../home-sub-menu/home-sub-menu';
import {Definition, iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-context',
  imports: [
    HomeSubMenu,
    Definition
  ],
  templateUrl: './context.html',
  styleUrl: '../home.scss',
})
export class Context extends BasePageWithSubtitle {
  override pageSubtitle = "Context";

  contextDefinition = {
    source: "Merriam-Webster",
    term: "Context",
    type: "noun",
    definitions: [
      {
        def: "the parts of a discourse that surround a word, phrase, or passage and that help to explain its meaning",
        sub: [
          "When you use other words in a sentence to help you learn the meaning of a certain word, you are using context clues.",
          "To really know a word, you must be able to use it in context.",
          "When taken out of context, his comments sound cruel, but he was only joking."
        ]
      },
      {
        def: " the situation in which something happens : environment, setting",
        sub: [
          "the historical context of the war",
          "even your suffering … can be seen in the context of what the whole world is going through."
        ]
      }
    ]
  } as iDefinition;

}
