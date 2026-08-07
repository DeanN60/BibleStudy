import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Philip} from './philip';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Philip', () => {
  let component: Philip;
  let fixture: ComponentFixture<Philip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Philip
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Philip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
