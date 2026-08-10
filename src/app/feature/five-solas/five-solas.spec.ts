import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveSolas } from './five-solas';

describe('FiveSolas', () => {
  let component: FiveSolas;
  let fixture: ComponentFixture<FiveSolas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveSolas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveSolas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
