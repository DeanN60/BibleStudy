import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {SolaDeoGloria} from './sola-deo-gloria';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {Book} from '@core/book';
import {MockFiveSolasSubMenu} from '@mock/mock-five-solas-sub-menu';
import {MockBook} from '@mock/mock-book';
import {isaiah_42_8} from '@books/Isaiah/isaiah_42';
import {isaiah_48_11} from '@books/Isaiah/isaiah_48';


describe('SolaDeoGloria Component', () => {
  let component: SolaDeoGloria;
  let fixture: ComponentFixture<SolaDeoGloria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SolaDeoGloria
      ],
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

    fixture = TestBed.createComponent(SolaDeoGloria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct pageSubtitle from BasePageWithSubtitle', () => {
    expect(component.pageSubtitle).toBe('Five Sola - Sola Deo Gloria');
  });

  it('should expose scripture references to the template', () => {
    // Accessing protected properties in TypeScript/Vitest test context
    expect((component as any).isaiah_42_8).toEqual(isaiah_42_8);
    expect((component as any).isaiah_48_11).toEqual(isaiah_48_11);
  });
});
