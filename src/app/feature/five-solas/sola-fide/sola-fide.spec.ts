import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {SolaFide} from './sola-fide';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {Book} from '@core/book';
import {SolaDeoGloria} from '../sola-deo-gloria/sola-deo-gloria';
import {MockFiveSolasSubMenu} from '@mock/mock-five-solas-sub-menu';
import {MockBook} from '@mock/mock-book';
import {rom_3_28} from '@books/Romans/rom_3';
import {eph_2_8_9} from '@books/Ephesians/eph_2';
import {rom_4_4_5} from '@books/Romans/rom_4';

describe('SolaFide', () => {
  let component: SolaFide;
  let fixture: ComponentFixture<SolaFide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolaFide],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // If you prefer mocking child components to avoid testing their implementation:
      .overrideComponent(SolaDeoGloria, {
        remove: {imports: [FiveSolasSubMenu, Book]},
        add: {imports: [MockFiveSolasSubMenu, MockBook]}
      })
      .compileComponents();

    fixture = TestBed.createComponent(SolaFide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the page subtitle correctly', () => {
    expect(component.pageSubtitle).toBe('Five Sola - Sola Fide');
  });

  it('should expose scripture references', () => {
    expect(component['rom_3_28']).toBe(rom_3_28);
    expect(component['eph_2_8_9']).toBe(eph_2_8_9);
    expect(component['rom_4_4_5']).toBe(rom_4_4_5);
  });
});
