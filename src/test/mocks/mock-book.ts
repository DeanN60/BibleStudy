import {Component, input} from '@angular/core';
import {BookData, fallbackBookData} from '@core/book-data';

@Component({
  selector: 'app-book',
  template: ''
})
export class MockBook {
  data = input.required<BookData, BookData | undefined>({
    transform: (value: BookData | undefined): BookData => {
      return value ?? fallbackBookData;
    }
  });
}
