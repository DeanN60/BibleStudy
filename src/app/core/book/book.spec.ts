import {Component, signal} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {Book} from './book';
import {OpenTrigger} from '@core/directive/open-trigger';
import {BookData, fallbackBookData} from '@core/book-data';
import {KeepInViewport} from '@core/directive/keep-in-viewport';

// Mock child components/directives if necessary
@Component({
  selector: 'app-test-host',
  standalone: true,
  imports: [Book],
  template: `
    <app-book [data]="bookData()"/>`,
})
class TestHostComponent {
  bookData = signal<BookData | undefined>(undefined);
}

describe('Book Component', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Book, TestHostComponent],
    })
      // Override child components/directives if you want to isolate the unit test
      .overrideComponent(Book, {
        remove: {imports: [OpenTrigger, KeepInViewport]},
        add: {imports: []}
      }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should use fallbackBookData when input value is undefined', () => {
    hostComponent.bookData.set(undefined);
    fixture.detectChanges();

    const bookInstance = fixture.debugElement.children[0].componentInstance as Book;
    expect(bookInstance.data()).toEqual(fallbackBookData);
  });

  it('should apply custom BookData when a valid value is provided', () => {
    const mockBookData: BookData = {
      reference: 'Book Reference',
      text: 'Test Driven Development with Vitest',
      source: 'Book Name',
    };

    hostComponent.bookData.set(mockBookData);
    fixture.detectChanges();

    const bookInstance = fixture.debugElement.children[0].componentInstance as Book;
    expect(bookInstance.data()).toEqual(mockBookData);
  });
});
