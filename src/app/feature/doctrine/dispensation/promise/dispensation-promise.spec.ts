import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DispensationPromise} from './dispensation-promise';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('DispensationPromise', () => {
  let component: DispensationPromise;
  let fixture: ComponentFixture<DispensationPromise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DispensationPromise
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DispensationPromise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
