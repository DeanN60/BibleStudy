import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Disciples} from './disciples';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Disciples', () => {
  let component: Disciples;
  let fixture: ComponentFixture<Disciples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Disciples
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Disciples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
