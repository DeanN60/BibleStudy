import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoiSubMenu } from './loi-sub-menu';

describe('LoiSubMenu', () => {
  let component: LoiSubMenu;
  let fixture: ComponentFixture<LoiSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoiSubMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoiSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
