import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveSolas } from './five-solas';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('FiveSolas', () => {
  let component: FiveSolas;
  let fixture: ComponentFixture<FiveSolas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FiveSolas
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveSolas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
