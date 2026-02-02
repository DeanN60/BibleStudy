import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salvation } from './salvation';

describe('Salvation', () => {
  let component: Salvation;
  let fixture: ComponentFixture<Salvation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salvation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Salvation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
