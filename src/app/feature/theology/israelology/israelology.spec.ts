import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Israelology} from './israelology';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Israelology', () => {
  let component: Israelology;
  let fixture: ComponentFixture<Israelology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Israelology
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Israelology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
