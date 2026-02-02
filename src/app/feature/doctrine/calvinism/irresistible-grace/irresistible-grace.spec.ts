import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrresistibleGrace } from './irresistible-grace';

describe('IrresistibleGrace', () => {
  let component: IrresistibleGrace;
  let fixture: ComponentFixture<IrresistibleGrace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrresistibleGrace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrresistibleGrace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
