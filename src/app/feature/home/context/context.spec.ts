import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Context} from './context';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Context', () => {
  let component: Context;
  let fixture: ComponentFixture<Context>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Context
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Context);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
