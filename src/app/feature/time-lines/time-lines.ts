import {Component, OnInit} from '@angular/core';
import {TimeLinesSubMenu} from './time-lines-sub-menu/time-lines-sub-menu';
import {iPerson, Person} from './person/person';
import {iMarker, TlMarker} from './tl-marker/tl-marker';

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
export class TimeLines implements OnInit {
  personList: iPerson[] | undefined;
  markerList: iMarker[] | undefined;
  markerHeight = 950;

  ngOnInit(): void {
    this.personList = [];
    this.personList.push({name: "Adam", birthYear: 0, age: 950});
    this.personList.push({name: "Seth", birthYear: 130, age: 912});
    this.personList.push({name: "Enosh", birthYear: 235, age: 905});
    this.personList.push({name: "Keran", birthYear: 325, age: 910});
    this.personList.push({name: "Mahalalel", birthYear: 395, age: 895});
    this.personList.push({name: "Jared", birthYear: 460, age: 962});
    this.personList.push({name: "Enoch", birthYear: 622, age: 365});
    this.personList.push({name: "Methuselah", birthYear: 687, age: 969});
    this.personList.push({name: "Lamech", birthYear: 874, age: 777});
    this.personList.push({name: "Noah", birthYear: 1056, age: 950});
    this.personList.push({name: "Shem", birthYear: 1558, age: 600});
    this.personList.push({name: "Arphaxad", birthYear: 1658, age: 438});
    this.personList.push({name: "Shelah", birthYear: 1693, age: 433});
    this.personList.push({name: "Eber", birthYear: 1723, age: 464});
    this.personList.push({name: "Peleg", birthYear: 1757, age: 239});
    this.personList.push({name: "Reu", birthYear: 1787, age: 239});
    this.personList.push({name: "Serug", birthYear: 1819, age: 230});
    this.personList.push({name: "Nahor", birthYear: 1849, age: 148});
    this.personList.push({name: "Terah", birthYear: 1878, age: 205});
    this.personList.push({name: "Abraham", birthYear: 1948, age: 175});
    this.personList.push({name: "Isaac", birthYear: 2048, age: 180});
    this.personList.push({name: "Jacob", birthYear: 2108, age: 147});
    this.personList.push({name: "Judah", birthYear: 2192, age: 119});
    this.personList.push({name: "Moses", birthYear: 2368, age: 120});
    this.personList.push({name: "David", birthYear: 2854, age: 70});
    // this.personList.push({name: "Hosea", birthYear: 3080, age: 60});
    // this.personList.push({name: "Isaiah", birthYear: 3110, age: 90});
    // this.personList.push({name: "Jeremiah", birthYear: 3280, age: 80});
    // this.personList.push({name: "Ezekiel", birthYear: 3302, age: 55});
    this.personList.push({name: "Daniel", birthYear: 3304, age: 95});
    this.personList.push({name: "Jesus", birthYear: 3922, age: 33});
    // this.personList.push({name: "Jesus", birthYear: 3950, age: 33});

    this.markerList = [];
    this.markerList.push({name: "1000 AM", eventYear: 1000, left: -2, top: -3.6, height: this.markerHeight, labelColor: "white"});
    this.markerList.push({name: "Flood", eventYear: 1656, left: -1.5, top: -3, height: this.markerHeight, labelColor: "#f17fa1"});
    this.markerList.push({name: "Babel", eventYear: 1757, left: -1.5, top: -3, height: this.markerHeight, labelColor: "#f17fa1"});
    this.markerList.push({name: "2000 AM", eventYear: 2000, left: -2, top: -3.6, height: this.markerHeight, labelColor: "white"});
    this.markerList.push({name: "Exodus", eventYear: 2448, left: -1.8, top: -3.4, height: this.markerHeight, labelColor: "#abe587"});
    this.markerList.push({name: "King David", eventYear: 2884, left: -2.55, top: -4.2, height: this.markerHeight, labelColor: "#cd87e5"});
    this.markerList.push({name: "3000 AM", eventYear: 3000, left: -2, top: -3.6, height: this.markerHeight, labelColor: "white"});
    this.markerList.push({name: "Babylon", eventYear: 3338, left: -2, top: -3.6, height: this.markerHeight, labelColor: "#f17fa1"});
    // this.markerList.push({name: "YOL", eventYear: 3925, left: -1.1, top: -2.5, height: this.markerHeight, labelColor: "white"});
    this.markerList.push({name: "4000 AM", eventYear: 4000, left: -2, top: -3.6, height: this.markerHeight, labelColor: "white"});
    this.markerList.push({name: "5000 AM", eventYear: 5000, left: -2, top: -3.6, height: this.markerHeight, labelColor: "white"});
    // this.markerList.push({name: "2000 AD", eventYear: 5925, left: -2, top: -3.6, height: this.markerHeight, labelColor: "white"});
    const year = new Date().getFullYear();
    const amYear = year + 3925;
    this.markerList.push({name: "" + year + " AD", eventYear: amYear, left: -2, top: -3.6, height: this.markerHeight, labelColor: "#cd87e5"});
    this.markerList.push({name: "6000 AM", eventYear: 6000, left: -2, top: -3.6, height: this.markerHeight, labelColor: "white"});
    this.markerList.push({name: "7000 AM", eventYear: 7000, left: -2, top: -3.6, height: this.markerHeight, labelColor: "white"});
  }
}
