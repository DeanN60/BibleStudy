import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaithAndWorks } from './faith-and-works';

describe('FaithAndWorks', () => {
  let component: FaithAndWorks;
  let fixture: ComponentFixture<FaithAndWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaithAndWorks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaithAndWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
