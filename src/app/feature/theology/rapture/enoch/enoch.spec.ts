import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enoch } from './enoch';

describe('Enoch', () => {
  let component: Enoch;
  let fixture: ComponentFixture<Enoch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enoch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enoch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
