import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teaching } from './teaching';

describe('Teaching', () => {
  let component: Teaching;
  let fixture: ComponentFixture<Teaching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teaching]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teaching);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
