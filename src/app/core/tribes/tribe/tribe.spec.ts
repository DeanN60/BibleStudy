import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tribe } from './tribe';

describe('Tribe', () => {
  let component: Tribe;
  let fixture: ComponentFixture<Tribe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tribe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tribe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
