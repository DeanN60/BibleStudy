import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Law} from './law';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Law', () => {
  let component: Law;
  let fixture: ComponentFixture<Law>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Law
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Law);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
