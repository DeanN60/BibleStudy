import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRapture } from './not-rapture';

describe('NotRapture', () => {
  let component: NotRapture;
  let fixture: ComponentFixture<NotRapture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotRapture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotRapture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
