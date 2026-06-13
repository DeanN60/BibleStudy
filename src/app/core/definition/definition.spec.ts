import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Definition } from './definition';

describe('Definition', () => {
  let component: Definition;
  let fixture: ComponentFixture<Definition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Definition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Definition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
