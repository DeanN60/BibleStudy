import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolaSriptura } from './sola-sriptura';

describe('SolaSriptura', () => {
  let component: SolaSriptura;
  let fixture: ComponentFixture<SolaSriptura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolaSriptura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolaSriptura);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
