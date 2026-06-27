import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bartholomew } from './bartholomew';

describe('Bartholomew', () => {
  let component: Bartholomew;
  let fixture: ComponentFixture<Bartholomew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bartholomew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bartholomew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
