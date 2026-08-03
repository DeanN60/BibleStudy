import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paul } from './paul';

describe('Paul', () => {
  let component: Paul;
  let fixture: ComponentFixture<Paul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paul]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paul);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
