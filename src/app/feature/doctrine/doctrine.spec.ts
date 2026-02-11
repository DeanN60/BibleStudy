import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Doctrine} from './doctrine';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Doctrine', () => {
  let component: Doctrine;
  let fixture: ComponentFixture<Doctrine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Doctrine
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Doctrine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
