import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedAtonement } from './limited-atonement';

describe('LimitedAtonement', () => {
  let component: LimitedAtonement;
  let fixture: ComponentFixture<LimitedAtonement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitedAtonement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitedAtonement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
