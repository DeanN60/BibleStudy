import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {Interpretation} from './interpretation';
import {HomeSubMenu} from '../home-sub-menu/home-sub-menu';
import {Definition} from '@core/definition/definition';
import {Book} from '@core/book';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {MockHomeSubMenu} from '@mock/mock-home-sub-menu';
import {MockDefinition} from '@mock/mock-definition';
import {MockBook} from '@mock/mock-book';

describe('Interpretation Component', () => {
  let component: Interpretation;
  let fixture: ComponentFixture<Interpretation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Interpretation
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Replace child components with mocks
      .overrideComponent(Interpretation, {
        remove: {imports: [HomeSubMenu, Definition, Book]},
        add: {imports: [MockHomeSubMenu, MockDefinition, MockBook]},
      })
      .compileComponents();

    fixture = TestBed.createComponent(Interpretation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should set the pageSubtitle property to "Interpretation"', () => {
    expect(component.pageSubtitle).toBe('Interpretation');
  });

  describe('Definition Properties', () => {
    it('should initialize allegoryDefinition correctly', () => {
      expect(component.allegoryDefinition.term).toBe('Allegory');
      expect(component.allegoryDefinition.source).toBe('Merriam-Webster');
      expect(component.allegoryDefinition.definitions.length).toBe(2);
    });

    it('should initialize allegoricalDefinition correctly', () => {
      expect(component.allegoricalDefinition.term).toBe('Allegorical');
      expect(component.allegoricalDefinition.source).toBe('Merriam-Webster');
      expect(component.allegoricalDefinition.definitions.length).toBe(2);
    });

    it('should initialize literalDefinition correctly', () => {
      expect(component.literalDefinition.term).toBe('Literal');
      expect(component.literalDefinition.source).toBe('Merriam-Webster');
      expect(component.literalDefinition.definitions.length).toBe(4);
    });
  });

  describe('Scripture References', () => {
    it('should expose scripture reference constants', () => {
      expect(component['daniel_8_5_8']).toBeDefined();
      expect(component['gen_1_1_5']).toBeDefined();
      expect(component['ezekiel_1_4_14']).toBeDefined();
      expect(component['rev_1_3']).toBeDefined();
    });
  });
});
