import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Millennium } from './millennium';

describe('Millennium', () => {
  let component: Millennium;
  let fixture: ComponentFixture<Millennium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Millennium]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Millennium);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
