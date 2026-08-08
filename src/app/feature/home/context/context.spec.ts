import {render} from '@testing-library/angular';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {Context} from './context';
import {HomeSubMenu} from '../home-sub-menu/home-sub-menu';
import {Definition, iDefinition} from '@core/definition/definition';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {Component, input} from '@angular/core';

// Mock child components to keep unit tests isolated
@Component({selector: 'app-home-sub-menu', template: ''})
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

describe('Context Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Context
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Mock child components if you want to isolate the unit test:
      .overrideComponent(Context, {
        remove: {imports: [HomeSubMenu, Definition]},
        add: {imports: [MockSubMenu, MockDefinition]},
      }).compileComponents();
  });

  it('should create the component instance', () => {
    const fixture = TestBed.createComponent(Context);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should initialize with pageSubtitle set to "Context"', () => {
    const fixture = TestBed.createComponent(Context);
    const component = fixture.componentInstance;

    expect(component.pageSubtitle).toBe('Context');
  });

  it('should contain the correct context definition data structure', () => {
    const fixture = TestBed.createComponent(Context);
    const component = fixture.componentInstance;

    expect(component.contextDefinition).toEqual({
      source: 'Merriam-Webster',
      term: 'Context',
      type: 'noun',
      definitions: [
        {
          def: 'the parts of a discourse that surround a word, phrase, or passage and that help to explain its meaning',
          sub: [
            'When you use other words in a sentence to help you learn the meaning of a certain word, you are using context clues.',
            'To really know a word, you must be able to use it in context.',
            'When taken out of context, his comments sound cruel, but he was only joking.',
          ],
        },
        {
          def: ' the situation in which something happens : environment, setting',
          sub: [
            'the historical context of the war',
            'even your suffering … can be seen in the context of what the whole world is going through.',
          ],
        },
      ],
    });
  });

  it('should render the component template properly', async () => {
    const {container} = await render(Context);

    expect(container).toBeTruthy();
  });
});
