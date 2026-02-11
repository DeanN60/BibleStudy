import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Calvinism} from './calvinism';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Calvinism', () => {
  let component: Calvinism;
  let fixture: ComponentFixture<Calvinism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Calvinism
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Calvinism);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
