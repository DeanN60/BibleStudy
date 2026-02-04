import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotOfWorks } from './not-of-works';

describe('NotOfWorks', () => {
  let component: NotOfWorks;
  let fixture: ComponentFixture<NotOfWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotOfWorks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotOfWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
