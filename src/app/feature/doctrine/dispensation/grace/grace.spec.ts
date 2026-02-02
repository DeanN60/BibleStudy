import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grace } from './grace';

describe('Grace', () => {
  let component: Grace;
  let fixture: ComponentFixture<Grace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
