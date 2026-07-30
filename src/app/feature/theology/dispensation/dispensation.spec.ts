import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Dispensation} from './dispensation';
import {provideRouter} from '@angular/router';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';

describe('Dispensation', () => {
  let component: Dispensation;
  let fixture: ComponentFixture<Dispensation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Dispensation
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Dispensation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
