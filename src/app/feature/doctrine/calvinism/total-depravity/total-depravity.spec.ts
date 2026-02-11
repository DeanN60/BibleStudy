import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TotalDepravity} from './total-depravity';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('TotalDepravity', () => {
  let component: TotalDepravity;
  let fixture: ComponentFixture<TotalDepravity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TotalDepravity
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TotalDepravity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
