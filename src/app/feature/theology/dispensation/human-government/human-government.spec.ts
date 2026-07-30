import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HumanGovernment} from './human-government';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('HumanGovernment', () => {
  let component: HumanGovernment;
  let fixture: ComponentFixture<HumanGovernment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HumanGovernment
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HumanGovernment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
