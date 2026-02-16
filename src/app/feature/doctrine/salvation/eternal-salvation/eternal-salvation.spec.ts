import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EternalSalvation} from './eternal-salvation';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('EternalSalvation', () => {
  let component: EternalSalvation;
  let fixture: ComponentFixture<EternalSalvation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EternalSalvation
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EternalSalvation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
