import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegioIiiGallica } from './legio-iii-gallica';

describe('LegioIiiGallica', () => {
  let component: LegioIiiGallica;
  let fixture: ComponentFixture<LegioIiiGallica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegioIiiGallica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegioIiiGallica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
