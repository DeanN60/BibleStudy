import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureOfJesus } from './rapture-of-jesus';

describe('RaptureOfJesus', () => {
  let component: RaptureOfJesus;
  let fixture: ComponentFixture<RaptureOfJesus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureOfJesus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaptureOfJesus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
