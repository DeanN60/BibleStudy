import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TheologySubMenu} from './theology-sub-menu';
import {provideRouter} from '@angular/router';

describe('TheologySubMenu', () => {
  let component: TheologySubMenu;
  let fixture: ComponentFixture<TheologySubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheologySubMenu],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TheologySubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
