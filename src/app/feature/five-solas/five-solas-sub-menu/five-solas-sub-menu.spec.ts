import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveSolasSubMenu } from './five-solas-sub-menu';

describe('FiveSolasSubMenu', () => {
  let component: FiveSolasSubMenu;
  let fixture: ComponentFixture<FiveSolasSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveSolasSubMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveSolasSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
