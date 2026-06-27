import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thaddaeus } from './thaddaeus';

describe('Thaddaeus', () => {
  let component: Thaddaeus;
  let fixture: ComponentFixture<Thaddaeus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thaddaeus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thaddaeus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
