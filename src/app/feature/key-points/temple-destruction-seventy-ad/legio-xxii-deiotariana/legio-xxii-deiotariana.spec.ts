import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegioXxiiDeiotariana } from './legio-xxii-deiotariana';

describe('LegioXxiiDeiotariana', () => {
  let component: LegioXxiiDeiotariana;
  let fixture: ComponentFixture<LegioXxiiDeiotariana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegioXxiiDeiotariana]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegioXxiiDeiotariana);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
