import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Generations} from './generations';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Generations', () => {
  let component: Generations;
  let fixture: ComponentFixture<Generations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Generations
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Generations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
