import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecclesiology } from './ecclesiology';

describe('Ecclesiology', () => {
  let component: Ecclesiology;
  let fixture: ComponentFixture<Ecclesiology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecclesiology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ecclesiology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
