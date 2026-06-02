import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcclesiologySubMenu } from './ecclesiology-sub-menu';

describe('EcclesiologySubMenu', () => {
  let component: EcclesiologySubMenu;
  let fixture: ComponentFixture<EcclesiologySubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcclesiologySubMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcclesiologySubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
