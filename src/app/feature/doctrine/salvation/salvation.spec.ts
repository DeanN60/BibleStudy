import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, input} from '@angular/core';
import {Salvation} from './salvation';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {RightSubMenu} from './right-sub-menu/right-sub-menu';
import {Definition, iDefinition} from '@core/definition/definition';
import {Book} from '@core/book';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {BookData, fallbackBookData} from '@core/book-data';

// Mock child components to keep unit tests isolated
@Component({selector: 'app-doctrine-sub-menu', template: ''})
class MockSubMenu {
}

@Component({selector: 'app-right-sub-menu', template: ''})
class MockRightSubMenu {
}

@Component({selector: 'app-definition', template: ''})
class MockDefinition {
  default = {
    source: 'unknown',
    term: 'Test',
    type: "noun",
    definitions: [
      {def: "Test 1"},
      {def: "Test 2"},
      {def: "Test 3"}
    ]
  } as iDefinition;
  data = input<iDefinition>(this.default);
}

@Component({selector: 'app-book', template: ''})
class MockBook {
  data = input.required<BookData, BookData | undefined>({
    transform: (value: BookData | undefined): BookData => {
      return value ?? fallbackBookData;
    }
  });
}

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
        add: {imports: [MockSubMenu, MockRightSubMenu, MockDefinition, MockBook]},
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
