import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonPeter } from './simon-peter';

describe('SimonPeter', () => {
  let component: SimonPeter;
  let fixture: ComponentFixture<SimonPeter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimonPeter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimonPeter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
