import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JamesSonOfZebedee} from './james-son-of-zebedee';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('JamesSonOfZebedee', () => {
  let component: JamesSonOfZebedee;
  let fixture: ComponentFixture<JamesSonOfZebedee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JamesSonOfZebedee
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JamesSonOfZebedee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
