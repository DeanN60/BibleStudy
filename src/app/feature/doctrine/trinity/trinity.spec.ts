import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trinity } from './trinity';

describe('Trinity', () => {
  let component: Trinity;
  let fixture: ComponentFixture<Trinity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trinity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trinity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
