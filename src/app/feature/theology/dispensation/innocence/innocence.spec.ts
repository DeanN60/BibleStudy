import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Innocence} from './innocence';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Innocence', () => {
  let component: Innocence;
  let fixture: ComponentFixture<Innocence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Innocence
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Innocence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
