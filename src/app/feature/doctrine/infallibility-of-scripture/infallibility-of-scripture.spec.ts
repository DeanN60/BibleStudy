import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InfallibilityOfScripture} from './infallibility-of-scripture';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('InfallibilityOfScripture', () => {
  let component: InfallibilityOfScripture;
  let fixture: ComponentFixture<InfallibilityOfScripture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InfallibilityOfScripture
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InfallibilityOfScripture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
