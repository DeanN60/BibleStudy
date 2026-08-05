import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureOfPaul } from './rapture-of-paul';

describe('RaptureOfPaul', () => {
  let component: RaptureOfPaul;
  let fixture: ComponentFixture<RaptureOfPaul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureOfPaul]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaptureOfPaul);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
