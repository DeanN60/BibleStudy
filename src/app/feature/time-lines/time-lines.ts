import {Component} from '@angular/core';
import {TimeLinesSubMenu} from './time-lines-sub-menu/time-lines-sub-menu';
import {iPerson, Person} from './person/person';
import {iMarker, TlMarker} from './tl-marker/tl-marker';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';
import {
  gen_5_12_14,
  gen_5_15_17,
  gen_5_18_20,
  gen_5_21_24,
  gen_5_25_27, gen_5_28_31, gen_5_32,
  gen_5_3_5,
  gen_5_6_8,
  gen_5_9_11
} from '@core/books/Genesis/gen_5';
import {
  gen_11_10_11,
  gen_11_12_13,
  gen_11_14_15,
  gen_11_16_17,
  gen_11_18_19,
  gen_11_20_21, gen_11_22_23, gen_11_24_25, gen_11_26_32
} from '@core/books/Genesis/gen_11';
import {gen_21_5} from '@core/books/Genesis/gen_21';
import {gen_25_24_26} from '@core/books/Genesis/gen_25';

@Component({
  selector: 'app-time-lines',
  imports: [
    TimeLinesSubMenu,
    Person,
    TlMarker
  ],
  templateUrl: './time-lines.html',
  styleUrl: './time-lines.scss',
})
export class TimeLines extends BasePageWithSubtitle {
  override pageSubtitle = "Time Lines";
  personList: iPerson[] | undefined;
  markerList: iMarker[] | undefined;
  markerHeight = 1150;
  marginTop = 5;
  scale = 1;
  yearOfOurLord = 3925;

  override init(): void {
    this.personList = [];
    this.personList.push({name: "Adam", birthYear: 0, age: 950, scale: this.scale, reference: gen_5_3_5});
    this.personList.push({name: "Seth", birthYear: 130, age: 912, scale: this.scale, reference: gen_5_6_8});
    this.personList.push({name: "Enosh", birthYear: 235, age: 905, scale: this.scale, reference: gen_5_9_11});
    this.personList.push({name: "Kenan", birthYear: 325, age: 910, scale: this.scale, reference: gen_5_12_14});
    this.personList.push({name: "Mahalalel", birthYear: 395, age: 895, scale: this.scale, reference: gen_5_15_17});
    this.personList.push({name: "Jared", birthYear: 460, age: 962, scale: this.scale, reference: gen_5_18_20});
    this.personList.push({name: "Enoch", birthYear: 622, age: 365, scale: this.scale, reference: gen_5_21_24});
    this.personList.push({name: "Methuselah", birthYear: 687, age: 969, scale: this.scale, reference: gen_5_25_27});
    this.personList.push({name: "Lamech", birthYear: 874, age: 777, scale: this.scale, reference: gen_5_28_31});
    this.personList.push({name: "Noah", birthYear: 1056, age: 950, scale: this.scale, reference: gen_5_32});
    this.personList.push({name: "Shem", birthYear: 1558, age: 600, scale: this.scale, reference: gen_11_10_11});
    this.personList.push({name: "Arphaxad", birthYear: 1658, age: 438, scale: this.scale, reference: gen_11_12_13});
    this.personList.push({name: "Shelah", birthYear: 1693, age: 433, scale: this.scale, reference: gen_11_14_15});
    this.personList.push({name: "Eber", birthYear: 1723, age: 464, scale: this.scale, reference: gen_11_16_17});
    this.personList.push({name: "Peleg", birthYear: 1757, age: 239, scale: this.scale, reference: gen_11_18_19});
    this.personList.push({name: "Reu", birthYear: 1787, age: 239, scale: this.scale, reference: gen_11_20_21});
    this.personList.push({name: "Serug", birthYear: 1819, age: 230, scale: this.scale, reference: gen_11_22_23});
    this.personList.push({name: "Nahor", birthYear: 1849, age: 148, scale: this.scale, reference: gen_11_24_25});
    this.personList.push({name: "Terah", birthYear: 1878, age: 205, scale: this.scale, reference: gen_11_26_32});
    this.personList.push({name: "Abraham", birthYear: 1948, age: 175, scale: this.scale, reference: gen_21_5});
    this.personList.push({name: "Isaac", birthYear: 2048, age: 180, scale: this.scale, reference: gen_25_24_26});
    this.personList.push({name: "Jacob", birthYear: 2108, age: 147, scale: this.scale, note: "Issac was about 86 when Judah was born. This is an estimation."});
    this.personList.push({name: "Judah", birthYear: 2192, age: 119, scale: this.scale, note: "Estimate based upon Google search"});
    this.personList.push({name: "Moses", birthYear: 2368, age: 120, scale: this.scale, note: "Estimate based upon Google search"});
    this.personList.push({name: "David", birthYear: 2861, age: 70, scale: this.scale, note: "Estimate based upon Google search"});
    this.personList.push({name: "Hosea", birthYear: 3080, age: 60, scale: this.scale, note: "Estimate based upon Google search"});
    this.personList.push({name: "Isaiah", birthYear: 3110, age: 90, scale: this.scale, note: "Estimate based upon Google search"});
    this.personList.push({name: "Jeremiah", birthYear: 3280, age: 80, scale: this.scale, note: "Estimate based upon Google search"});
    this.personList.push({name: "Ezekiel", birthYear: 3302, age: 55, scale: this.scale, note: "Estimate based upon Google search"});
    this.personList.push({name: "Daniel", birthYear: 3304, age: 95, scale: this.scale, note: "Estimate based upon Google search"});
    this.personList.push({name: "Alexander The Great", birthYear: 3648, age: 33, scale: this.scale, note: "Estimate based upon Google search"});
    this.personList.push({name: "Jesus", birthYear: 3922, age: 33, scale: this.scale, note: "Estimate based upon dates from the DSSCalendar.com"});

    this.markerList = [];
    this.markerList.push({
      name: "1000 AM",
      eventYear: 1000 * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "white",
      note: "End Day One"}
    });
    this.markerList.push({
      name: "Construct Ark",
      eventYear: 1556 * this.scale,
      height: this.markerHeight,
      label: {left: -3.6, top: -5.6, labelColor: "#abe587",
      note: "Noah started to build the Ark"}
    });
    this.markerList.push({
      name: "Flood",
      eventYear: 1656 * this.scale,
      height: this.markerHeight,
      label: {left: -1.5, top: -3.5, labelColor: "#f17fa1"}
    });
    this.markerList.push({
      name: "Babel",
      eventYear: 1757 * this.scale,
      height: this.markerHeight,
      label: {left: -1.5, top: -3.5, labelColor: "#f17fa1", note: "The world was divided"}
    });
    this.markerList.push({
      name: "2000 AM",
      eventYear: 2000 * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "white",
      note: "End Day Two"}
    });
    this.markerList.push({
      name: "Exodus",
      eventYear: 2448 * this.scale,
      height: this.markerHeight,
      label: {left: -1.8, top: -4, labelColor: "#abe587"}
    });
    this.markerList.push({
      name: "Enter Land",
      eventYear: 2488 * this.scale,
      height: this.markerHeight,
      label: {left: -2.7, top: -5, labelColor: "#abe587", note: "Enter Promised Land"}
    });
    this.markerList.push({
      name: "King David",
      eventYear: 2891 * this.scale,
      height: this.markerHeight,
      label: {left: -2.7, top: -5, labelColor: "#cd87e5"}
    });
    this.markerList.push({
      name: "3000 AM",
      eventYear: 3000 * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "white",
      note: "End Day Three"}
    });
    this.markerList.push({
      name: "Babylon",
      eventYear: 3338 * this.scale,
      height: this.markerHeight,
      label: {left: -2, top: -4, labelColor: "#f17fa1", note: "Israel went into captivity in Babylon"}
    });
    this.markerList.push({
      name: "YOL",
      eventYear: this.yearOfOurLord * this.scale,
      height: this.markerHeight,
      label: {left: -1, top: -3, labelColor: "#abe587", note: "Year of Our Lord"}
    });
    this.markerList.push({
      name: "4000 AM",
      eventYear: 4000 * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "white",
      note: "End Day Four"}
    });
    this.markerList.push({
      name: "5000 AM",
      eventYear: 5000 * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "white",
      note: "End Day Five"}
    });
    this.markerList.push({
      name: "1948 AD",
      eventYear: 5873 * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "#abe587", note: "Israel became a nation in 5873 AM."}
    });
    const year = new Date().getFullYear();
    const amYear = year + this.yearOfOurLord;
    this.markerList.push({
      name: "" + year + " AD",
      eventYear: amYear * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "#cd87e5", note: "Current year " + amYear + " AM"}
    });
    this.markerList.push({
      name: "6000 AM",
      eventYear: 6000 * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "white",
      note: "End Day Six"}
    });
    this.markerList.push({
      name: "7000 AM",
      eventYear: 7000 * this.scale,
      height: this.markerHeight,
      label: {left: -2.2, top: -4.4, labelColor: "white",
      note: "End Day Seven"}
    });
  }
}
