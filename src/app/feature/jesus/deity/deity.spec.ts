import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deity } from './deity';

describe('Deity', () => {
  let component: Deity;
  let fixture: ComponentFixture<Deity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
