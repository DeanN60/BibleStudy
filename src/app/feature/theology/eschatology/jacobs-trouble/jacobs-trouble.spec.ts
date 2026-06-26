import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacobsTrouble } from './jacobs-trouble';

describe('JacobsTrouble', () => {
  let component: JacobsTrouble;
  let fixture: ComponentFixture<JacobsTrouble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JacobsTrouble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JacobsTrouble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
