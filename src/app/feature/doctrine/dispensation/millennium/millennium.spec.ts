import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Millennium} from './millennium';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Millennium', () => {
  let component: Millennium;
  let fixture: ComponentFixture<Millennium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Millennium
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Millennium);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
