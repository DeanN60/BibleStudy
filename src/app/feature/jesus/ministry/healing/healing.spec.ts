import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Healing} from './healing';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Healing', () => {
  let component: Healing;
  let fixture: ComponentFixture<Healing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Healing
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Healing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
