import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NotOfWorks} from './not-of-works';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('NotOfWorks', () => {
  let component: NotOfWorks;
  let fixture: ComponentFixture<NotOfWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NotOfWorks
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotOfWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
