import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TimeLinesSubMenu} from './time-lines-sub-menu/time-lines-sub-menu';
import {iPerson, Person} from './person/person';
import {iMarker, TlMarker} from './tl-marker/tl-marker';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {persons} from './persons';
import {dateMarkers} from './date-markers';
import {Definition, iDefinition} from '@core/definition/definition';

@Component({
  selector: 'app-time-lines',
  imports: [
    TimeLinesSubMenu,
    Definition
  ],
  templateUrl: './time-lines.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './time-lines.scss',
})
export class TimeLines extends BasePageWithSubtitle {
  override pageSubtitle = "Time Lines";

  annoMundiDefinition = {
    source: "Merriam-Webster",
    term: "Anno Mundi",
    type: "Latin phrase",
    definitions: [
      {def: "n the year of the world —used in reckoning dates from the supposed period of the creation of the world, especially as fixed by James Ussher at 4004 b.c. or by the Jews at 3761 b.c. —abbreviation AM"}
    ]
  } as iDefinition;
}
