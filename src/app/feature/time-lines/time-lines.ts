import {Component} from '@angular/core';
import {TimeLinesSubMenu} from './time-lines-sub-menu/time-lines-sub-menu';
import {Person} from './person/person';

@Component({
  selector: 'app-time-lines',
  imports: [
    TimeLinesSubMenu,
    Person
  ],
  templateUrl: './time-lines.html',
  styleUrl: './time-lines.scss',
})
export class TimeLines {
  adam = {
    name: "Adam",
    birthYear: 0,
    age: 950
  };
  seth = {
    name: "Seth",
    birthYear: 130,
    age: 912
  };
  enosh = {
    name: "Enosh",
    birthYear: 235,
    age: 905
  };
  keran = {
    name: "Keran",
    birthYear: 325,
    age: 910
  };
  mahalael = {
    name: "Mahalalel",
    birthYear: 395,
    age: 895
  };
  jared = {
    name: "Jared",
    birthYear: 460,
    age: 962
  };
  enoch = {
    name: "Enoch",
    birthYear: 622,
    age: 365
  };
  methuselah={
    name: "Methuselah",
    birthYear: 687,
    age: 969
  };
  lamech = {
    name: "Lamech",
    birthYear: 874,
    age: 777
  };
  noah = {
    name: "Noah",
    birthYear: 1056,
    age: 950
  };
  shem = {
    name: "Shem",
    birthYear: 1558,
    age: 600
  };
  arphaxad = {
    name: "Arphaxad",
    birthYear: 1658,
    age: 438
  };
  shelah = {
    name: "Shelah",
    birthYear: 1693,
    age: 433
  };
  eber = {
    name: "Eber",
    birthYear: 1723,
    age: 464
  };
  peleg = {
    name: "Peleg",
    birthYear: 1757,
    age: 239
  };
  reu = {
    name: "Reu",
    birthYear: 1787,
    age: 239
  };
  serug = {
    name: "Serug",
    birthYear: 1819,
    age: 230
  };
  nahor = {
    name: "Nahor",
    birthYear: 1849,
    age: 148
  };
  terah = {
    name: "Terah",
    birthYear: 1878,
    age: 205
  };
  abraham = {
    name: "Abraham",
    birthYear: 1948,
    age: 175
  };
  isaac = {
    name: "Isaac",
    birthYear: 2048,
    age: 180
  };
  jacob = {
    name: "Jacob",
    birthYear: 2108,
    age: 147
  };
  judah = {
    name: "Judah",
    birthYear: 2192,
    age: 119
  }
}
