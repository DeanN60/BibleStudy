import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureOfElijah } from './rapture-of-elijah';

describe('RaptureOfElijah', () => {
  let component: RaptureOfElijah;
  let fixture: ComponentFixture<RaptureOfElijah>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureOfElijah]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaptureOfElijah);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
