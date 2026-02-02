import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Numbers13 } from './numbers-13';

describe('Numbers13', () => {
  let component: Numbers13;
  let fixture: ComponentFixture<Numbers13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Numbers13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Numbers13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
