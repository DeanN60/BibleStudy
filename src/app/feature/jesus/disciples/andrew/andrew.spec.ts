import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Andrew} from './andrew';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Andrew', () => {
  let component: Andrew;
  let fixture: ComponentFixture<Andrew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Andrew
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Andrew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
