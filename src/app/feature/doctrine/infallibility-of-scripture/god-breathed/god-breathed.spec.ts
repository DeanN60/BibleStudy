import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodBreathed } from './god-breathed';

describe('GodBreathed', () => {
  let component: GodBreathed;
  let fixture: ComponentFixture<GodBreathed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GodBreathed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodBreathed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
