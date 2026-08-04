import {Component, input, ChangeDetectionStrategy} from '@angular/core';
import {VerseData} from '@core/verse-data';
import {fallbackVerse} from '@core/verse';

@Component({
  selector: 'app-verse-block',
  imports: [],
  templateUrl: './verse-block.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['../verse.scss', './verse-block.scss'],
})
export class VerseBlock {
  data = input.required<VerseData, VerseData | undefined>({
    transform: (value: VerseData | undefined): VerseData => {
      return value ?? fallbackVerse;
    }
  });
}
