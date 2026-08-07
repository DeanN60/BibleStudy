import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Bartholomew} from './bartholomew';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Bartholomew', () => {
  let component: Bartholomew;
  let fixture: ComponentFixture<Bartholomew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Bartholomew
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Bartholomew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
