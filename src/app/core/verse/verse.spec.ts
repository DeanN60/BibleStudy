import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Verse} from './verse';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {VerseData} from '@core/verse-data';

describe('Verse', () => {
  let component: Verse;
  let fixture: ComponentFixture<Verse>;
  const ephesians2_8 = new VerseData(
    'Ephesians 2:8',
    '8 For by grace you have been saved through faith, and this not of yourselves, it is the gift of God;',
    'Bibles, Steadfast; Foundation, The Lockman . The Legacy Standard Bible - LSB (p. 3918). 316 Publishing, Inc.. Kindle Edition.'
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Verse
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Verse);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('data', ephesians2_8);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
