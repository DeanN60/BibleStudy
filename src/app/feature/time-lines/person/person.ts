import {Component, input, ChangeDetectionStrategy} from '@angular/core';
import {Verse} from '@core/verse';
import {VerseData} from '@core/verse-data';
import {KeepInViewport} from '@core/directive/keep-in-viewport';

export interface iPerson {
  name: string;
  birthYear: number;
  age: number;
  scale: number;
  show?: boolean
  reference?: VerseData;
  note?: string;
}

@Component({
  selector: 'app-person',
  imports: [
    Verse,
    KeepInViewport
  ],
  templateUrl: './person.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
