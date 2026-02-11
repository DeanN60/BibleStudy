import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Incarnate} from './incarnate';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Incarnate', () => {
  let component: Incarnate;
  let fixture: ComponentFixture<Incarnate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Incarnate
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Incarnate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
