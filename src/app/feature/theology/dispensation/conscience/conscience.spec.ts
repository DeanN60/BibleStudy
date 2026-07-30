import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Conscience} from './conscience';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Conscience', () => {
  let component: Conscience;
  let fixture: ComponentFixture<Conscience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Conscience
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Conscience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
