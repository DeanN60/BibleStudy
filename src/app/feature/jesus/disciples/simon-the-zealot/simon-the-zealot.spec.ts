import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SimonTheZealot} from './simon-the-zealot';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {SubMenu} from '../../../doctrine/doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book';

describe('SimonTheZealot', () => {
  let component: SimonTheZealot;
  let fixture: ComponentFixture<SimonTheZealot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubMenu,
        RightSubMenu,
        Book,
        SimonTheZealot
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SimonTheZealot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
