import {Component, OnInit} from '@angular/core';
import {iPerson, Person} from '../person/person';
import {TimeLinesSubMenu} from '../time-lines-sub-menu/time-lines-sub-menu';
import {iMarker, TlMarker} from '../tl-marker/tl-marker';

@Component({
  selector: 'app-life-of-jesus',
  imports: [
    Person,
    TimeLinesSubMenu,
    TlMarker
  ],
  templateUrl: './life-of-jesus.html',
  styleUrl: '../time-lines.scss',
})
export class LifeOfJesus implements OnInit {
  personList: iPerson[] | undefined;
  markerList: iMarker[] | undefined;
  markerHeight = 50;
  marginTop = 6;
  markerTop = -2;
  scale = 50;

  ngOnInit(): void {
    this.personList = [];
    this.personList.push({name: "Jesus", birthYear: 0, age: 33, scale: this.scale});
    // this.personList.push({name: "Resurrection", birthYear: 33, age: 0.15, scale: this.scale});

    this.markerList = [];
    this.markerList.push({name: "12 years", eventYear: 12 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.1, top: -4.5, labelColor: "white"}});
    this.markerList.push({name: "Start Ministry", eventYear: 30 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -3.5, top: -5.5, labelColor: "white"}});
    this.markerList.push({name: "Crucifixion", eventYear: 33 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.8, top: -5, labelColor: "red"}});
    this.markerList.push({name: "Ascension", eventYear: 33.3 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.9, top: -5, labelColor: "lightgreen"}});
    this.markerList.push({name: "Pentecost", eventYear: 33.4 * this.scale, top: this.markerTop, height: this.markerHeight, label: {left: -2.3, top: -5, labelColor: "lightgreen"}});
  }
}
