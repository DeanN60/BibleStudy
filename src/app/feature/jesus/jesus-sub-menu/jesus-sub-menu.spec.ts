import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JesusSubMenu } from './jesus-sub-menu';

describe('JesusSubMenu', () => {
  let component: JesusSubMenu;
  let fixture: ComponentFixture<JesusSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JesusSubMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JesusSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
