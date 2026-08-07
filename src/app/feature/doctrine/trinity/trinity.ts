import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SubMenu} from "../doctrine-sub-menu/sub-menu";
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {Definition, iDefinition} from '@core/definition/definition';
import {Book} from '@core/book/book';
import {john_1_14, john_1_1_5} from '@books/John/john_1';
import {psalms_33_6} from '@books/Psalms/psalms_33';
import {john_14_16_17, john_14_25_26, john_14_9_14} from '@books/John/john_14';

@Component({
  selector: 'app-trinity',
  imports: [
    SubMenu,
    Definition,
    Book
  ],
  templateUrl: './trinity.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './trinity.scss',
})
export class Trinity extends BasePageWithSubtitle {
  override pageSubtitle = "Trinity";

  trinityDefinition = {
    source: "Merriam-Webster",
    term: "Trinity",
    type: "noun",
    definitions: [
      {def: "the unity of Father, Son, and Holy Spirit as three persons in one Godhead according to Christian dogma"},
      {type: "trinity", def: "a group of three closely related persons or things"},
      {type: "or Trinity Sunday", def: "the Sunday after Whitsunday observed as a feast in honor of the Trinity"}
    ]
  } as iDefinition;

  protected readonly john_1_1_5 = john_1_1_5;
  protected readonly john_1_14 = john_1_14;
  protected readonly psalms_33_6 = psalms_33_6;
  protected readonly john_14_9_14 = john_14_9_14;
  protected readonly john_14_16_17 = john_14_16_17;
  protected readonly john_14_25_26 = john_14_25_26;
}
