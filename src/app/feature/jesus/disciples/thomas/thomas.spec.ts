import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Thomas} from './thomas';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Thomas', () => {
  let component: Thomas;
  let fixture: ComponentFixture<Thomas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Thomas
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Thomas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
