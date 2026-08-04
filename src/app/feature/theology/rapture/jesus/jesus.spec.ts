import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jesus } from './jesus';

describe('Jesus', () => {
  let component: Jesus;
  let fixture: ComponentFixture<Jesus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jesus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jesus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
