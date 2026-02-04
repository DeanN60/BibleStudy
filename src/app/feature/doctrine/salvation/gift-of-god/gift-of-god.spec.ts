import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftOfGod } from './gift-of-god';

describe('GiftOfGod', () => {
  let component: GiftOfGod;
  let fixture: ComponentFixture<GiftOfGod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftOfGod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftOfGod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
