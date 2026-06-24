import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Healing } from './healing';

describe('Healing', () => {
  let component: Healing;
  let fixture: ComponentFixture<Healing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Healing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Healing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
