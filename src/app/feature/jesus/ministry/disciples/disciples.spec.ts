import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disciples } from './disciples';

describe('Disciples', () => {
  let component: Disciples;
  let fixture: ComponentFixture<Disciples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Disciples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Disciples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
