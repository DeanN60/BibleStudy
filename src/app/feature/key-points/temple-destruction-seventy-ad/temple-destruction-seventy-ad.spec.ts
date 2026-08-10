import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleDestructionSeventyAd } from './temple-destruction-seventy-ad';

describe('TempleDestructionSeventyAd', () => {
  let component: TempleDestructionSeventyAd;
  let fixture: ComponentFixture<TempleDestructionSeventyAd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleDestructionSeventyAd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleDestructionSeventyAd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
