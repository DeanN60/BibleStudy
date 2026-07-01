import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTimeLine } from './history-time-line';

describe('HistoryTimeLine', () => {
  let component: HistoryTimeLine;
  let fixture: ComponentFixture<HistoryTimeLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryTimeLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryTimeLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
