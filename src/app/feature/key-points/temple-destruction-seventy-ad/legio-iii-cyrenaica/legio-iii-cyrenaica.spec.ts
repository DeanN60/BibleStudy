import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegioIiiCyrenaica } from './legio-iii-cyrenaica';

describe('LegioIiiCyrenaica', () => {
  let component: LegioIiiCyrenaica;
  let fixture: ComponentFixture<LegioIiiCyrenaica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegioIiiCyrenaica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegioIiiCyrenaica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
