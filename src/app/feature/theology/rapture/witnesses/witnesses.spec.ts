import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Witnesses } from './witnesses';

describe('Witnesses', () => {
  let component: Witnesses;
  let fixture: ComponentFixture<Witnesses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Witnesses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Witnesses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
