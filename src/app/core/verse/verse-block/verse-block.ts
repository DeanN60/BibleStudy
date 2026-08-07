import {Component, input, ChangeDetectionStrategy} from '@angular/core';
import {BookData, fallbackBookData} from '@core/book-data';

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
      return value ?? fallbackBookData;
    }
  });
}
