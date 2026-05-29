import {Component, input} from '@angular/core';
import {VerseData} from './verse-data';

const fallbackVerse: VerseData = {
  reference: "unknown",
  verse: "no verse available",
  source: "unknown"
}

@Component({
  selector: 'app-verse',
  imports: [],
  templateUrl: './verse.html',
  styleUrl: './verse.scss',
})
export class Verse {
  data = input.required<VerseData, VerseData | undefined>({
    transform: (value: VerseData | undefined): VerseData => {
      return value ?? fallbackVerse;
    }
  });
}
