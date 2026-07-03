import {Component, ChangeDetectionStrategy} from '@angular/core';
import {iPerson, Person} from '../person/person';
import {iMarker, TlMarker} from '../tl-marker/tl-marker';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {persons} from '../persons';
import {dateMarkers} from '../date-markers';
import {TimeLinesSubMenu} from '../time-lines-sub-menu/time-lines-sub-menu';

@Component({
  selector: 'app-history-time-line',
  imports: [
    TimeLinesSubMenu,
    Person,
    TlMarker
  ],
  templateUrl: './history-time-line.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: '../time-lines.scss',
})
export class HistoryTimeLine extends BasePageWithSubtitle {
  override pageSubtitle = "History";
  personList: iPerson[] = [];
  markerList: iMarker[] = [];
  markerHeight = 160;
  marginTop = 5;
  scale = 1;
  yearOfOurLord = 3925;

  override init(): void {
    // Load Persons
    this.personList = [];
    persons.forEach(person => {
      if (person!.show) {
        this.personList.push(person);
      }
    })

    // Automatically set the height of the timeline marker lines
    this.markerHeight = 40 * this.personList.length;

    // Load Date Markers
    this.markerList = [];
    dateMarkers.forEach(marker => {
      marker.eventYear *= this.scale;
      marker.height = this.markerHeight;
      this.markerList.push(marker);
    })
    this.markerList.push({
      name: "YOL",
      eventYear: this.yearOfOurLord * this.scale,
      height: this.markerHeight,
      label: {left: -1, top: -3, labelColor: "#abe587", note: "Year of Our Lord"}
    });
    const year = new Date().getFullYear();
    const amYear = year + this.yearOfOurLord;
    this.markerList.push({
      name: "" + year + " AD",
      eventYear: amYear * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "#cd87e5", note: "Current year " + amYear + " AM"}
    });
  }
}
