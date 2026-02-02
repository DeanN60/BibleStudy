import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conscience } from './conscience';

describe('Conscience', () => {
  let component: Conscience;
  let fixture: ComponentFixture<Conscience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conscience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conscience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
