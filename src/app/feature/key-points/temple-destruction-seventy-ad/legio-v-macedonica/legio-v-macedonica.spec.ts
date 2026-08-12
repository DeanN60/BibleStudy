import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegioVMacedonica } from './legio-v-macedonica';

describe('LegioVMacedonica', () => {
  let component: LegioVMacedonica;
  let fixture: ComponentFixture<LegioVMacedonica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegioVMacedonica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegioVMacedonica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
