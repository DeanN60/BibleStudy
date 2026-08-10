import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolaChristus } from './sola-christus';

describe('SolaChristus', () => {
  let component: SolaChristus;
  let fixture: ComponentFixture<SolaChristus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolaChristus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolaChristus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
