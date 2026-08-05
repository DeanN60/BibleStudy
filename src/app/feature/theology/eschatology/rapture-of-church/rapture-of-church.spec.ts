import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureOfChurch } from './rapture-of-church';

describe('RaptureOfChurch', () => {
  let component: RaptureOfChurch;
  let fixture: ComponentFixture<RaptureOfChurch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureOfChurch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaptureOfChurch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
