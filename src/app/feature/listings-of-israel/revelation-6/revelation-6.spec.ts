import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Revelation6} from './revelation-6';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Revelation6', () => {
  let component: Revelation6;
  let fixture: ComponentFixture<Revelation6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Revelation6
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Revelation6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
