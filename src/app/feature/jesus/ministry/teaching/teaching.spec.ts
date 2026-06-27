import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teaching } from './teaching';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Teaching', () => {
  let component: Teaching;
  let fixture: ComponentFixture<Teaching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Teaching
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Teaching);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
