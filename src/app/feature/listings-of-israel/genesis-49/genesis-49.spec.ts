import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Genesis49} from './genesis-49';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Genesis49', () => {
  let component: Genesis49;
  let fixture: ComponentFixture<Genesis49>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Genesis49
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Genesis49);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
