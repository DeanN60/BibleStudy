import { Component } from '@angular/core';
import {HomeSubMenu} from '../home-sub-menu/home-sub-menu';
import {Definition, iDefinition} from '@core/definition/definition';
import {Verse} from '@core/verse';
import {daniel_8_5_8} from '@core/books/Daniel/daniel_8';
import {gen_1_1_5} from '@core/books/Genesis/gen_1';
import {ezekiel_1_4_14} from '@core/books/Ezekiel/ezekiel_1';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

@Component({
  selector: 'app-interpretation',
  imports: [
    HomeSubMenu,
    Definition,
    Verse
  ],
  templateUrl: './interpretation.html',
  styleUrls: ['../home.scss', './interpretation.scss'],
})
export class Interpretation extends BasePageWithSubtitle {
  override pageSubtitle = "Interpretation";

  allegoryDefinition = {
    source: "Merriam-Webster",
    term: "Allegory",
    type: "noun",
    definitions: [
      {
        def: "the expression of truths or generalizations about human existence by means of symbolic figures and actions",
        sub: [
          "a writer known for their use of allegory",
          "Folklore may have begun as allegory for natural or social phenomena—Toni Morrison"
        ]
      },
      {
        def: "an instance (as in literature or painting) of such expression",
        type: "also",
        sub: [
          "The poem is an allegory of love and jealousy.",
          "This book is not shy with its allegories.—Giri Nathan",
          "\"The Wizard of Oz\" is often seen as an allegory for the Populist movement—Sam Buchbinder"
        ]
      }
    ]
  } as iDefinition;

  allegoricalDefinition = {
    source: "Merriam-Webster",
    term: "Allegorical",
    type: "noun",
    definitions: [
      {
        def: "of, relating to, or having the characteristics of allegory",
        sub: [
          "allegorical paintings",
          "allegorical meanings of images",
          "allegorical symbols of our culture"
        ]
      },
      {
        def: "having hidden spiritual meaning that transcends the literal sense of a sacred text"
      }
    ]
  } as iDefinition;

  literalDefinition = {
    source: "Merriam-Webster",
    term: "Literal",
    type: "noun",
    definitions: [
      {
        def: "according with the letter of the scriptures",
        sub: [
          "adheres to a literal reading of the passage"
        ]
      },
      {
        def: "adhering to fact or to the ordinary construction or primary meaning of a term or expression : actual",
        sub: [
          "Liberty in the literal sense is impossible—Benjamin N. Cardozo"
        ]
      },
      {
        def: "free from exaggeration or embellishment",
        sub: [
          "the literal truth"
        ]
      },
      {
        def: "characterized by a concern mainly with facts",
        sub: [
          "an extremely literal person"
        ]
      }
    ]
  } as iDefinition;

  protected readonly daniel_8_5_8 = daniel_8_5_8;
  protected readonly gen_1_1_5 = gen_1_1_5;
  protected readonly ezekiel_1_4_14 = ezekiel_1_4_14;
}
