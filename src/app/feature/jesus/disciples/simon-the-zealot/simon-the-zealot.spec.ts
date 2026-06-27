import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonTheZealot } from './simon-the-zealot';

describe('SimonTheZealot', () => {
  let component: SimonTheZealot;
  let fixture: ComponentFixture<SimonTheZealot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimonTheZealot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimonTheZealot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
