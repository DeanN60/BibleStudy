import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolaDeoGloria } from './sola-deo-gloria';

describe('SolaDeoGloria', () => {
  let component: SolaDeoGloria;
  let fixture: ComponentFixture<SolaDeoGloria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolaDeoGloria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolaDeoGloria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
