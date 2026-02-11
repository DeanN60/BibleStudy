import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SubMenu} from './sub-menu';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('SubMenu', () => {
  let component: SubMenu;
  let fixture: ComponentFixture<SubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubMenu
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
