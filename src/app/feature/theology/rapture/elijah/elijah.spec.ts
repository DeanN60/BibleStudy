import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elijah } from './elijah';

describe('Elijah', () => {
  let component: Elijah;
  let fixture: ComponentFixture<Elijah>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elijah]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elijah);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
