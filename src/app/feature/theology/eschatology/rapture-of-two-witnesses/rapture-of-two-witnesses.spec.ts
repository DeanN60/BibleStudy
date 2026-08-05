import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureOfTwoWitnesses } from './rapture-of-two-witnesses';

describe('RaptureOfTwoWitnesses', () => {
  let component: RaptureOfTwoWitnesses;
  let fixture: ComponentFixture<RaptureOfTwoWitnesses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureOfTwoWitnesses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaptureOfTwoWitnesses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
