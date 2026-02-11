import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GodBreathed} from './god-breathed';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('GodBreathed', () => {
  let component: GodBreathed;
  let fixture: ComponentFixture<GodBreathed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GodBreathed
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GodBreathed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
