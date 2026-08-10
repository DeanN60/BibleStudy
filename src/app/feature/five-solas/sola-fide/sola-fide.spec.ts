import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolaFide } from './sola-fide';

describe('SolaFide', () => {
  let component: SolaFide;
  let fixture: ComponentFixture<SolaFide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolaFide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolaFide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
