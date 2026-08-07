import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaithAndWorks } from './faith-and-works';
import {provideRouter} from '@angular/router';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient} from '@angular/common/http';
import {SubMenu} from '../../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book';

describe('FaithAndWorks', () => {
  let component: FaithAndWorks;
  let fixture: ComponentFixture<FaithAndWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubMenu,
        RightSubMenu,
        Book,
        FaithAndWorks
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FaithAndWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
