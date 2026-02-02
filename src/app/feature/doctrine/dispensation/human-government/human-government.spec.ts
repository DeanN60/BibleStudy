import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanGovernment } from './human-government';

describe('HumanGovernment', () => {
  let component: HumanGovernment;
  let fixture: ComponentFixture<HumanGovernment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanGovernment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanGovernment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
