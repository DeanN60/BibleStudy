import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpretation } from './interpretation';

describe('Interpretation', () => {
  let component: Interpretation;
  let fixture: ComponentFixture<Interpretation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interpretation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interpretation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
