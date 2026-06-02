import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheologySubMenu } from './theology-sub-menu';

describe('TheologySubMenu', () => {
  let component: TheologySubMenu;
  let fixture: ComponentFixture<TheologySubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheologySubMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheologySubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
