import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureOfEnoch } from './rapture-of-enoch';

describe('RaptureOfEnoch', () => {
  let component: RaptureOfEnoch;
  let fixture: ComponentFixture<RaptureOfEnoch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureOfEnoch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaptureOfEnoch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
