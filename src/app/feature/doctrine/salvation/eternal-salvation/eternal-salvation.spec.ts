import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EternalSalvation } from './eternal-salvation';

describe('EternalSalvation', () => {
  let component: EternalSalvation;
  let fixture: ComponentFixture<EternalSalvation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EternalSalvation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EternalSalvation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
