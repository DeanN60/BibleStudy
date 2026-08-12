import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegioXvApollinaris } from './legio-xv-apollinaris';

describe('LegioXvApollinaris', () => {
  let component: LegioXvApollinaris;
  let fixture: ComponentFixture<LegioXvApollinaris>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegioXvApollinaris]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegioXvApollinaris);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
