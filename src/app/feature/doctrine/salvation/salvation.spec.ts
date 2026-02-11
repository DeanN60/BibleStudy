import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Salvation} from './salvation';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Salvation', () => {
  let component: Salvation;
  let fixture: ComponentFixture<Salvation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Salvation
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Salvation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
