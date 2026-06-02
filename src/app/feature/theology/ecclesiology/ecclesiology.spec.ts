import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Ecclesiology} from './ecclesiology';
import {provideRouter} from '@angular/router';

describe('Ecclesiology', () => {
  let component: Ecclesiology;
  let fixture: ComponentFixture<Ecclesiology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecclesiology],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Ecclesiology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
