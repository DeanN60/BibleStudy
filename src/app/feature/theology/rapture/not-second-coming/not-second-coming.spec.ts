import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSecondComing } from './not-second-coming';

describe('NotSecondComing', () => {
  let component: NotSecondComing;
  let fixture: ComponentFixture<NotSecondComing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotSecondComing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotSecondComing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
