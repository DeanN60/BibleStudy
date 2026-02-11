import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Ministry} from './ministry';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Ministry', () => {
  let component: Ministry;
  let fixture: ComponentFixture<Ministry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Ministry
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Ministry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
