import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NeedForSalvation} from './need-for-salvation';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('NeedForSalvation', () => {
  let component: NeedForSalvation;
  let fixture: ComponentFixture<NeedForSalvation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NeedForSalvation
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NeedForSalvation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
