import {Component, input, ChangeDetectionStrategy} from '@angular/core';
import {VerseData} from './verse-data';
import {VerseBlock} from '@core/verse-block/verse-block';
import {KeepInViewport} from '@core/directive/keep-in-viewport';
import {OpenTrigger} from '@core/directive/open-trigger';

export const fallbackVerse: VerseData = {
  reference: "unknown",
  verse: "no verse available",
  source: "unknown"
}

@Component({
  selector: 'app-verse, app-book',
  imports: [
    VerseBlock,
    KeepInViewport,
    OpenTrigger
  ],
  templateUrl: './verse.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './verse.scss',
})
export class Verse {
  data = input.required<VerseData, VerseData | undefined>({
    transform: (value: VerseData | undefined): VerseData => {
      return value ?? fallbackVerse;
    }
  });
}
