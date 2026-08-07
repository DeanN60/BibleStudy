import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Matthew} from './matthew';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {SubMenu} from '../../../doctrine/doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book';

describe('Matthew', () => {
  let component: Matthew;
  let fixture: ComponentFixture<Matthew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubMenu,
        RightSubMenu,
        Book,
        Matthew
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Matthew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
