import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Numbers2} from './numbers-2';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Numbers2', () => {
  let component: Numbers2;
  let fixture: ComponentFixture<Numbers2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Numbers2
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Numbers2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
