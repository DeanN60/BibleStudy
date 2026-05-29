import {Component, input} from '@angular/core';
import {Verse} from '@core/verse';
import {VerseData} from '@core/verse-data';

export interface iPerson {
  name: string;
  birthYear: number;
  age: number;
  reference?: VerseData;
}

@Component({
  selector: 'app-person',
  imports: [
    Verse
  ],
  templateUrl: './person.html',
  styleUrl: './person.scss'
})
export class Person {
  per = input<iPerson>({name: 'Test', age: 950, birthYear: 0});

  getDeathYear(): number {
    return this.per().birthYear + this.per().age;
  }
}
