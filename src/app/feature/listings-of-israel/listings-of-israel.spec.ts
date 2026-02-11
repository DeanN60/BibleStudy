import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListingsOfIsrael} from './listings-of-israel';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('ListingsOfIsrael', () => {
  let component: ListingsOfIsrael;
  let fixture: ComponentFixture<ListingsOfIsrael>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListingsOfIsrael
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListingsOfIsrael);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
