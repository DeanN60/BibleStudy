import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {Trinity} from './trinity';
import {SubMenu} from '../doctrine-sub-menu/sub-menu';
import {Definition} from '@core/definition/definition';
import {Book} from '@core/book/book';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {MockDoctrineSubMenu} from '@mock/mock-doctrine-sub-menu';
import {MockDefinition} from '@mock/mock-definition';
import {MockBook} from '@mock/mock-book';

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
      .overrideComponent(Trinity, {
        remove: {imports: [SubMenu, Definition, Book]},
        add: {imports: [MockDoctrineSubMenu, MockDefinition, MockBook]}
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
