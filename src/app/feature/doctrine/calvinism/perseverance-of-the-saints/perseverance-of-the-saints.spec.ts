import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PerseveranceOfTheSaints} from './perseverance-of-the-saints';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('PerseveranceOfTheSaints', () => {
  let component: PerseveranceOfTheSaints;
  let fixture: ComponentFixture<PerseveranceOfTheSaints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PerseveranceOfTheSaints
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PerseveranceOfTheSaints);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
