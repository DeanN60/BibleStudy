import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Philip } from './philip';

describe('Philip', () => {
  let component: Philip;
  let fixture: ComponentFixture<Philip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Philip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Philip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
