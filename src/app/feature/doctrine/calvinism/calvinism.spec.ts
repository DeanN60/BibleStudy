import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {Calvinism} from './calvinism';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('Calvinism Component', () => {
  let component: Calvinism;
  let fixture: ComponentFixture<Calvinism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Calvinism
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Calvinism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle to "Calvinism"', () => {
    expect(component.pageSubtitle).toBe('Calvinism');
  });

  it('should initialize calvinismDefinition with correct Merriam-Webster definition', () => {
    expect(component.calvinismDefinition).toBeDefined();
    expect(component.calvinismDefinition.source).toBe('Merriam-Webster');
    expect(component.calvinismDefinition.term).toBe('Calvinism');
    expect(component.calvinismDefinition.type).toBe('noun');
    expect(component.calvinismDefinition.definitions).toBeDefined();
    expect(component.calvinismDefinition.definitions.length).toBe(1);
    expect(component.calvinismDefinition.definitions[0].def).toContain('theological system of Calvin');
  });
});
