import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Resurrection} from './resurrection';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Resurrection', () => {
  let component: Resurrection;
  let fixture: ComponentFixture<Resurrection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Resurrection
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Resurrection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
