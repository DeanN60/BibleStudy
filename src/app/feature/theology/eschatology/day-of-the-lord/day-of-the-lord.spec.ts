import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfTheLord } from './day-of-the-lord';

describe('DayOfTheLord', () => {
  let component: DayOfTheLord;
  let fixture: ComponentFixture<DayOfTheLord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayOfTheLord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayOfTheLord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
