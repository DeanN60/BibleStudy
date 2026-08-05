import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComing } from './second-coming';

describe('SecondComing', () => {
  let component: SecondComing;
  let fixture: ComponentFixture<SecondComing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
