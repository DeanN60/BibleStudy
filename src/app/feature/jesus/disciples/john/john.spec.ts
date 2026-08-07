import {ComponentFixture, TestBed} from '@angular/core/testing';

import {John} from './john';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('John', () => {
  let component: John;
  let fixture: ComponentFixture<John>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        John
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(John);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
