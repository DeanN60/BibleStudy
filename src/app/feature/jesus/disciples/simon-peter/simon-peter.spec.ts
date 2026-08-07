import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SimonPeter} from './simon-peter';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('SimonPeter', () => {
  let component: SimonPeter;
  let fixture: ComponentFixture<SimonPeter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SimonPeter
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SimonPeter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
