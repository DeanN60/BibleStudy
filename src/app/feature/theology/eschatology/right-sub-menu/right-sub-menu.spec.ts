import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSubMenu } from './right-sub-menu';

describe('RightSubMenu', () => {
  let component: RightSubMenu;
  let fixture: ComponentFixture<RightSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightSubMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
