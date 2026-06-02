import {Component, input} from '@angular/core';
import {Verse} from '@core/verse';
import {VerseData} from '@core/verse-data';

export interface iPerson {
  name: string;
  birthYear: number;
  age: number;
  scale: number;
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
  default = {
    name: 'Test',
    age: 950,
    birthYear: 0,
    scale: 1
  };
  per = input<iPerson>(this.default);

  getDeathYear(): number {
    return (this.per().birthYear * this.per().scale) + (this.per().age * this.per().scale);
  }
}
