import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EschatologyRightMenu } from './eschatology-right-menu';

describe('EschatologyRightMenu', () => {
  let component: EschatologyRightMenu;
  let fixture: ComponentFixture<EschatologyRightMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EschatologyRightMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EschatologyRightMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
