import {Component, OnInit} from '@angular/core';
import {TimeLinesSubMenu} from './time-lines-sub-menu/time-lines-sub-menu';
import {iPerson, Person} from './person/person';
import {iMarker, TlMarker} from './tl-marker/tl-marker';
import {BasePageWithSubtitle} from '@core/base-page-with-subtitle/base-page-with-subtitle';

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
  markerHeight = 950;
  marginTop = 5;
  markerTop = -47;
  scale = 1;

  override init(): void {
    this.personList = [];
    this.personList.push({name: "Adam", birthYear: 0, age: 950, scale: this.scale});
    this.personList.push({name: "Seth", birthYear: 130, age: 912, scale: this.scale});
    this.personList.push({name: "Enosh", birthYear: 235, age: 905, scale: this.scale});
    this.personList.push({name: "Keran", birthYear: 325, age: 910, scale: this.scale});
    this.personList.push({name: "Mahalalel", birthYear: 395, age: 895, scale: this.scale});
    this.personList.push({name: "Jared", birthYear: 460, age: 962, scale: this.scale});
    this.personList.push({name: "Enoch", birthYear: 622, age: 365, scale: this.scale});
    this.personList.push({name: "Methuselah", birthYear: 687, age: 969, scale: this.scale});
    this.personList.push({name: "Lamech", birthYear: 874, age: 777, scale: this.scale});
    this.personList.push({name: "Noah", birthYear: 1056, age: 950, scale: this.scale});
    this.personList.push({name: "Shem", birthYear: 1558, age: 600, scale: this.scale});
    this.personList.push({name: "Arphaxad", birthYear: 1658, age: 438, scale: this.scale});
    this.personList.push({name: "Shelah", birthYear: 1693, age: 433, scale: this.scale});
    this.personList.push({name: "Eber", birthYear: 1723, age: 464, scale: this.scale});
    this.personList.push({name: "Peleg", birthYear: 1757, age: 239, scale: this.scale});
    this.personList.push({name: "Reu", birthYear: 1787, age: 239, scale: this.scale});
    this.personList.push({name: "Serug", birthYear: 1819, age: 230, scale: this.scale});
    this.personList.push({name: "Nahor", birthYear: 1849, age: 148, scale: this.scale});
    this.personList.push({name: "Terah", birthYear: 1878, age: 205, scale: this.scale});
    this.personList.push({name: "Abraham", birthYear: 1948, age: 175, scale: this.scale});
    this.personList.push({name: "Isaac", birthYear: 2048, age: 180, scale: this.scale});
    this.personList.push({name: "Jacob", birthYear: 2108, age: 147, scale: this.scale});
    this.personList.push({name: "Judah", birthYear: 2192, age: 119, scale: this.scale});
    this.personList.push({name: "Moses", birthYear: 2368, age: 120, scale: this.scale});
    this.personList.push({name: "David", birthYear: 2854, age: 70, scale: this.scale});
    // this.personList.push({name: "Hosea", birthYear: 3080, age: 60, scale: this.scale});
    // this.personList.push({name: "Isaiah", birthYear: 3110, age: 90, scale: this.scale});
    // this.personList.push({name: "Jeremiah", birthYear: 3280, age: 80, scale: this.scale});
    // this.personList.push({name: "Ezekiel", birthYear: 3302, age: 55, scale: this.scale});
    this.personList.push({name: "Daniel", birthYear: 3304, age: 95, scale: this.scale});
    this.personList.push({name: "Jesus", birthYear: 3922, age: 33, scale: this.scale});
    // this.personList.push({name: "Jesus", birthYear: 3950, age: 33, scale: this.scale});

    this.markerList = [];
    this.markerList.push({name: "1000 AM", eventYear: 1000 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.2, top: -4.4, labelColor: "white"}});
    this.markerList.push({name: "Flood", eventYear: 1656 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -1.5, top: -3.5, labelColor: "#f17fa1"}});
    this.markerList.push({name: "Babel", eventYear: 1757 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -1.5, top: -3.5, labelColor: "#f17fa1", note: "The world was divided"}});
    this.markerList.push({name: "2000 AM", eventYear: 2000 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.2, top: -4.4, labelColor: "white"}});
    this.markerList.push({name: "Exodus", eventYear: 2448 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -1.8, top: -4, labelColor: "#abe587"}});
    this.markerList.push({name: "Enter Land", eventYear: 2488 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.7, top: -5, labelColor: "#abe587", note: "Enter Promised Land"}});
    this.markerList.push({name: "King David", eventYear: 2884 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.7, top: -5, labelColor: "#cd87e5"}});
    this.markerList.push({name: "3000 AM", eventYear: 3000 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.2, top: -4.4, labelColor: "white"}});
    this.markerList.push({name: "Babylon", eventYear: 3338 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2, top: -4, labelColor: "#f17fa1", note: "Israel went into captivity in Babylon"}});
    // this.markerList.push({name: "YOL", eventYear: 3925 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -1, top: -3, labelColor: "white"}});
    this.markerList.push({name: "4000 AM", eventYear: 4000 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.2, top: -4.4, labelColor: "white"}});
    this.markerList.push({name: "5000 AM", eventYear: 5000 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.2, top: -4.4, labelColor: "white"}});
    this.markerList.push({name: "1948 AD", eventYear: 5837 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.2, top: -4.4, labelColor: "#abe587", note: "Israel became a nation."}});
    const year = new Date().getFullYear();
    const amYear = year + 3925;
    this.markerList.push({name: "" + year + " AD", eventYear: amYear * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.2, top: -4.4, labelColor: "#cd87e5", note: "Current year"}});
    this.markerList.push({name: "6000 AM", eventYear: 6000 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.2, top: -4.4, labelColor: "white"}});
    this.markerList.push({name: "7000 AM", eventYear: 7000 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.2, top: -4.4, labelColor: "white"}});
  }
}
