import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incarnate } from './incarnate';

describe('Incarnate', () => {
  let component: Incarnate;
  let fixture: ComponentFixture<Incarnate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Incarnate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Incarnate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
