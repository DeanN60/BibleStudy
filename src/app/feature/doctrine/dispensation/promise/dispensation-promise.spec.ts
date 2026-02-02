import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensationPromise } from './dispensation-promise';

describe('DispensationPromise', () => {
  let component: DispensationPromise;
  let fixture: ComponentFixture<DispensationPromise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispensationPromise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensationPromise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
