import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Thaddaeus} from './thaddaeus';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Thaddaeus', () => {
  let component: Thaddaeus;
  let fixture: ComponentFixture<Thaddaeus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Thaddaeus
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Thaddaeus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
