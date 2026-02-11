import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeLinesSubMenu} from './time-lines-sub-menu';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('TimeLinesSubMenu', () => {
  let component: TimeLinesSubMenu;
  let fixture: ComponentFixture<TimeLinesSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TimeLinesSubMenu
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeLinesSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
