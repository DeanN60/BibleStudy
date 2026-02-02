import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Innocence } from './innocence';

describe('Innocence', () => {
  let component: Innocence;
  let fixture: ComponentFixture<Innocence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Innocence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Innocence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
