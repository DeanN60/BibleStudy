import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {Trinity} from './trinity';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {Definition, iDefinition} from '@core/definition/definition';
import {Book} from '@core/book/book';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {Component, input} from '@angular/core';
import {BookData, fallbackBookData} from '@core/book-data';

// Mock child components to keep unit tests isolated
@Component({selector: 'app-doctrine-sub-menu', template: ''})
class MockSubMenu {
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

describe('Trinity Component', () => {
  let component: Trinity;
  let fixture: ComponentFixture<Trinity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Trinity
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Mock child components if needed to isolate the Trinity component test
      .overrideComponent(Trinity, {
        remove: {imports: [SubMenu, Definition, Book]},
        add: {imports: [MockSubMenu, MockDefinition, MockBook]}
      })
      .compileComponents();

    fixture = TestBed.createComponent(Trinity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle to "Trinity"', () => {
    expect(component.pageSubtitle).toBe('Trinity');
  });

  it('should initialize trinityDefinition correctly', () => {
    expect(component.trinityDefinition).toBeDefined();
    expect(component.trinityDefinition.term).toBe('Trinity');
    expect(component.trinityDefinition.source).toBe('Merriam-Webster');
    expect(component.trinityDefinition.definitions.length).toBe(3);
  });

  it('should expose scripture properties', () => {
    expect(component['john_1_1_5']).toBeDefined();
    expect(component['john_1_14']).toBeDefined();
    expect(component['psalms_33_6']).toBeDefined();
    expect(component['john_14_9_14']).toBeDefined();
    expect(component['john_14_16_17']).toBeDefined();
    expect(component['john_14_25_26']).toBeDefined();
  });
});


// import {ComponentFixture, TestBed} from '@angular/core/testing';
//
// import {Trinity} from './trinity';
// import {provideRouter} from '@angular/router';
// import {provideHttpClient} from '@angular/common/http';
// import {provideHttpClientTesting} from '@angular/common/http/testing';
//
// describe('Trinity', () => {
//   let component: Trinity;
//   let fixture: ComponentFixture<Trinity>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         Trinity
//       ],
//       providers: [
//         provideRouter([]),
//         provideHttpClient(),
//         provideHttpClientTesting()
//       ]
//     }).compileComponents();
//
//     fixture = TestBed.createComponent(Trinity);
//     component = fixture.componentInstance;
//     await fixture.whenStable();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
