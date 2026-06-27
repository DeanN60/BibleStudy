import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matthew } from './matthew';

describe('Matthew', () => {
  let component: Matthew;
  let fixture: ComponentFixture<Matthew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matthew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matthew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
