import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HistoryTimeLine} from './history-time-line';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('HistoryTimeLine', () => {
  let component: HistoryTimeLine;
  let fixture: ComponentFixture<HistoryTimeLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HistoryTimeLine
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryTimeLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
