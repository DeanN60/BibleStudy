import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Grace} from './grace';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Grace', () => {
  let component: Grace;
  let fixture: ComponentFixture<Grace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Grace
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Grace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
