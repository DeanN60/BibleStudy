import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeLines} from './time-lines';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('TimeLines', () => {
  let component: TimeLines;
  let fixture: ComponentFixture<TimeLines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TimeLines
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeLines);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
