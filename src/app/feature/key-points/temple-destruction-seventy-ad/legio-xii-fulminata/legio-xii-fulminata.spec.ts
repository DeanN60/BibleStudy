import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegioXiiFulminata } from './legio-xii-fulminata';

describe('LegioXiiFulminata', () => {
  let component: LegioXiiFulminata;
  let fixture: ComponentFixture<LegioXiiFulminata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegioXiiFulminata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegioXiiFulminata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
