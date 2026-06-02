import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LifeOfJesus} from './life-of-jesus';
import {provideRouter} from '@angular/router';

describe('LifeOfJesus', () => {
  let component: LifeOfJesus;
  let fixture: ComponentFixture<LifeOfJesus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeOfJesus],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LifeOfJesus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
