import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoiSubMenu} from './loi-sub-menu';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('LoiSubMenu', () => {
  let component: LoiSubMenu;
  let fixture: ComponentFixture<LoiSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoiSubMenu
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoiSubMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
