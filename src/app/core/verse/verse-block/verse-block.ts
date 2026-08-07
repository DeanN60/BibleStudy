import {Component, input, ChangeDetectionStrategy} from '@angular/core';
import {BookData} from '@core/book-data';
import {fallbackVerse} from '@core/verse';

@Component({
  selector: 'app-verse-block',
  imports: [],
  templateUrl: './verse-block.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['../verse.scss', './verse-block.scss'],
})
export class VerseBlock {
  data = input.required<BookData, BookData | undefined>({
    transform: (value: BookData | undefined): BookData => {
      return value ?? fallbackVerse;
    }
  });
}
