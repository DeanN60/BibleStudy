import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Salvation} from './salvation';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Definition} from '@core/definition/definition';
import {Book} from '@core/book';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {MockDoctrineSubMenu} from '@mock/mock-doctrine-sub-menu';
import {MockRightSubMenu} from '@mock/mock-right-sub-menu';
import {MockDefinition} from '@mock/mock-definition'
import {MockBook} from '@mock/mock-book';

describe('Salvation Component', () => {
  let component: Salvation;
  let fixture: ComponentFixture<Salvation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Salvation
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Override child component imports with mocks
      .overrideComponent(Salvation, {
        remove: {imports: [SubMenu, RightSubMenu, Definition, Book]},
        add: {imports: [MockDoctrineSubMenu, MockRightSubMenu, MockDefinition, MockBook]},
      })
      .compileComponents();

    fixture = TestBed.createComponent(Salvation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle correctly', () => {
    expect(component.pageSubtitle).toBe('Salvation');
  });

  it('should initialize salvationDefinition with correct values', () => {
    expect(component.salvationDefinition).toEqual({
      source: 'Merriam-Webster',
      term: 'Salvation',
      type: 'noun',
      definitions: [
        {def: 'deliverance from the power and effects of sin'},
        {def: 'the agent or means of such saving or deliverance'},
      ],
    });
  });

  it('should expose scripture references on component instance', () => {
    expect(component['rom_3_23']).toBeDefined();
    expect(component['rom_10_9']).toBeDefined();
    expect(component['rom_10_13']).toBeDefined();
    expect(component['rom_8_1']).toBeDefined();
    expect(component['rom_8_38_39']).toBeDefined();
    expect(component['rom_11_6']).toBeDefined();
    expect(component['rom_3_10_18']).toBeDefined();
    expect(component['rom_5_8']).toBeDefined();
    expect(component['rom_5_1']).toBeDefined();
    expect(component['rom_5_15']).toBeDefined();
    expect(component['rom_6_23']).toBeDefined();
    expect(component['eph_2_8']).toBeDefined();
  });
});
