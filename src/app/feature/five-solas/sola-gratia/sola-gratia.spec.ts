import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolaGratia } from './sola-gratia';

describe('SolaGratia', () => {
  let component: SolaGratia;
  let fixture: ComponentFixture<SolaGratia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolaGratia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolaGratia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
