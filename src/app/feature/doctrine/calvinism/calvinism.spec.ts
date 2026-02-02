import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calvinism } from './calvinism';

describe('Calvinism', () => {
  let component: Calvinism;
  let fixture: ComponentFixture<Calvinism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calvinism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calvinism);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
