import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubMenu } from './home-sub-menu';

describe('HomeSubMenu', () => {
  let component: HomeSubMenu;
  let fixture: ComponentFixture<HomeSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSubMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
