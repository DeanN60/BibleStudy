import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComingNotRapture } from './second-coming-not-rapture';

describe('SecondComingNotRapture', () => {
  let component: SecondComingNotRapture;
  let fixture: ComponentFixture<SecondComingNotRapture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComingNotRapture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComingNotRapture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
