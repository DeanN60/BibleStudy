import { ComponentFixture, TestBed } from '@angular/core/testing';

import { James } from './james';

describe('James', () => {
  let component: James;
  let fixture: ComponentFixture<James>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [James]
    })
    .compileComponents();

    fixture = TestBed.createComponent(James);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
