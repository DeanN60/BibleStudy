import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureOfPhilip } from './rapture-of-philip';

describe('RaptureOfPhilip', () => {
  let component: RaptureOfPhilip;
  let fixture: ComponentFixture<RaptureOfPhilip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureOfPhilip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaptureOfPhilip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
