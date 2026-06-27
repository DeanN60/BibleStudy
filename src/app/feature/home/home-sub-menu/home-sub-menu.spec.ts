import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeSubMenu} from './home-sub-menu';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideZonelessChangeDetection} from '@angular/core';

describe('HomeSubMenu', () => {
  let component: HomeSubMenu;
  let fixture: ComponentFixture<HomeSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeSubMenu
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
