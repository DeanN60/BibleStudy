import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegioXFretensis } from './legio-x-fretensis';

describe('LegioXFretensis', () => {
  let component: LegioXFretensis;
  let fixture: ComponentFixture<LegioXFretensis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegioXFretensis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegioXFretensis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
