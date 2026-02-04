import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedForSalvation } from './need-for-salvation';

describe('NeedForSalvation', () => {
  let component: NeedForSalvation;
  let fixture: ComponentFixture<NeedForSalvation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeedForSalvation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedForSalvation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
