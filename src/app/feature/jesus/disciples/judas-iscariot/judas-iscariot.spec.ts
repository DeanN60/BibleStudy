import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JudasIscariot} from './judas-iscariot';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {SubMenu} from '../../../doctrine/doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book';

describe('JudasIscariot', () => {
  let component: JudasIscariot;
  let fixture: ComponentFixture<JudasIscariot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubMenu,
        RightSubMenu,
        Book,
        JudasIscariot
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JudasIscariot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
