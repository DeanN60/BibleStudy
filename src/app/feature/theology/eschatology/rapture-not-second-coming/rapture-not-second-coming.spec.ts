import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaptureNotSecondComing } from './rapture-not-second-coming';

describe('RaptureNotSecondComing', () => {
  let component: RaptureNotSecondComing;
  let fixture: ComponentFixture<RaptureNotSecondComing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaptureNotSecondComing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaptureNotSecondComing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
