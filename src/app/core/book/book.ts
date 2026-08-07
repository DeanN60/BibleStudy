import {Component, input, ChangeDetectionStrategy} from '@angular/core';
import {BookData, fallbackBookData} from '@core/book-data';
import {OpenTrigger} from '@core/directive/open-trigger';

@Component({
  selector: 'app-book',
  imports: [
    OpenTrigger
  ],
  templateUrl: './book.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './book.scss',
})
export class Book {
  data = input.required<BookData, BookData | undefined>({
    transform: (value: BookData | undefined): BookData => {
      return value ?? fallbackBookData;
    }
  });
}
