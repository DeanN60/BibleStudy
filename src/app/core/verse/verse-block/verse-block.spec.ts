import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VerseBlock} from './verse-block';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';
import {matt_24_21} from '@core/books/Matthew/matt_24';

describe('VerseBlock', () => {
  let component: VerseBlock;
  let fixture: ComponentFixture<VerseBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        VerseBlock
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VerseBlock);
    component = fixture.componentInstance;
    component.data.apply(matt_24_21);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
