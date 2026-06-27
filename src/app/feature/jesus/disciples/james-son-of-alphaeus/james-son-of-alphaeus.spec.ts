import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamesSonOfAlphaeus } from './james-son-of-alphaeus';

describe('JamesSonOfAlphaeus', () => {
  let component: JamesSonOfAlphaeus;
  let fixture: ComponentFixture<JamesSonOfAlphaeus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JamesSonOfAlphaeus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JamesSonOfAlphaeus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
