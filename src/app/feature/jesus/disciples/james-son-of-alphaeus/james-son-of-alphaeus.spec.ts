import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JamesSonOfAlphaeus} from './james-son-of-alphaeus';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {SubMenu} from '../../../doctrine/doctrine-sub-menu/sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book';

describe('JamesSonOfAlphaeus', () => {
  let component: JamesSonOfAlphaeus;
  let fixture: ComponentFixture<JamesSonOfAlphaeus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubMenu,
        RightSubMenu,
        Book,
        JamesSonOfAlphaeus
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JamesSonOfAlphaeus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
