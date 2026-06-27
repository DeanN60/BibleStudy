import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeverGiveUp } from './never-give-up';

describe('NeverGiveUp', () => {
  let component: NeverGiveUp;
  let fixture: ComponentFixture<NeverGiveUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeverGiveUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeverGiveUp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
