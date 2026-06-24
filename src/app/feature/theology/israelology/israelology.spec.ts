import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Israelology } from './israelology';

describe('Israelology', () => {
  let component: Israelology;
  let fixture: ComponentFixture<Israelology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Israelology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Israelology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
