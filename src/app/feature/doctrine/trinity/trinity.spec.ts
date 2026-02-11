import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Trinity} from './trinity';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Trinity', () => {
  let component: Trinity;
  let fixture: ComponentFixture<Trinity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Trinity
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Trinity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
