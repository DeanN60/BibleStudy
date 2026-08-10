import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPointsSubMenu } from './key-points-sub-menu';

describe('KeyPointsSubMenu', () => {
  let component: KeyPointsSubMenu;
  let fixture: ComponentFixture<KeyPointsSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyPointsSubMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyPointsSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
