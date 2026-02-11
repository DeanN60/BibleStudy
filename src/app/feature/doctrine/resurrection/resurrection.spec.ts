import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resurrection } from './resurrection';

describe('Resurrection', () => {
  let component: Resurrection;
  let fixture: ComponentFixture<Resurrection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resurrection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resurrection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
