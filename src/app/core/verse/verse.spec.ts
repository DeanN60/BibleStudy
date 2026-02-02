import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verse } from './verse';

describe('Verse', () => {
  let component: Verse;
  let fixture: ComponentFixture<Verse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
