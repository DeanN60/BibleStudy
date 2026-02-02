import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseveranceOfTheSaints } from './perseverance-of-the-saints';

describe('PerseveranceOfTheSaints', () => {
  let component: PerseveranceOfTheSaints;
  let fixture: ComponentFixture<PerseveranceOfTheSaints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerseveranceOfTheSaints]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerseveranceOfTheSaints);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
