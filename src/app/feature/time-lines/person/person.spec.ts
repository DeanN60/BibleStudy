import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ComponentRef } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { Person } from './person'; // Adjust path as needed
import { Book } from '@core/book';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

// Optional: Mock child directives/components if they are complex
@Component({ selector: 'app-book', standalone: true, template: '' })
class MockBookComponent {}

describe('Person Component', () => {
  let component: Person;
  let fixture: ComponentFixture<Person>;
  let componentRef: ComponentRef<Person>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Person
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Override child components/directives if you prefer isolation:
      .overrideComponent(Person, {
        remove: { imports: [Book] },
        add: { imports: [MockBookComponent] }
      })
      .compileComponents();

    fixture = TestBed.createComponent(Person);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default per input values', () => {
    expect(component.per()).toEqual({
      name: 'Test',
      age: 950,
      birthYear: 0,
      scale: 1
    });
  });

  it('should calculate death year correctly using default signal values', () => {
    // (0 * 1) + (950 * 1) = 950
    const deathYear = component.getDeathYear();
    expect(deathYear).toBe(950);
  });

  it('should calculate death year correctly when input signal is updated', () => {
    // Set custom input using componentRef.setInput
    componentRef.setInput('per', {
      name: 'John Doe',
      age: 80,
      birthYear: 1920,
      scale: 2
    });

    fixture.detectChanges();

    // (1920 * 2) + (80 * 2) = 3840 + 160 = 4000
    const deathYear = component.getDeathYear();
    expect(deathYear).toBe(4000);
  });
});
