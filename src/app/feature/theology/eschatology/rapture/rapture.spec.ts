import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rapture } from './rapture';

describe('Rapture', () => {
  let component: Rapture;
  let fixture: ComponentFixture<Rapture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rapture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rapture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
