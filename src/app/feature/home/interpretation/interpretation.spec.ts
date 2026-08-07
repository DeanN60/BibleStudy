import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Interpretation} from './interpretation';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {SubMenu} from '../../doctrine/doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../../jesus/ministry/right-sub-menu/right-sub-menu';
import {Book} from '@core/book';

describe('Interpretation', () => {
  let component: Interpretation;
  let fixture: ComponentFixture<Interpretation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubMenu,
        RightSubMenu,
        Book,
        Interpretation
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Interpretation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
