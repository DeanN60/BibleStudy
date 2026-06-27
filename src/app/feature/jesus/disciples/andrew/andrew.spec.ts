import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andrew } from './andrew';

describe('Andrew', () => {
  let component: Andrew;
  let fixture: ComponentFixture<Andrew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Andrew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Andrew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
