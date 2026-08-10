import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, beforeEach, it, expect } from 'vitest';
import { OpenTrigger } from './open-trigger';

// Create a test host component to apply the directive
@Component({
  standalone: true,
  imports: [OpenTrigger],
  template: `<div appOpenTrigger>Test Host</div>`,
})
class TestHostComponent {}

describe('OpenTrigger Directive', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let element: HTMLElement;
  let directiveInstance: OpenTrigger;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        OpenTrigger
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.directive(OpenTrigger));
    element = debugElement.nativeElement;
    directiveInstance = debugElement.injector.get(OpenTrigger);
  });

  it('should initialize with isOpen signal as false', () => {
    expect(directiveInstance.isOpen()).toBe(false);
  });

  it('should set isOpen to true and add "is-open" class on mouseenter', () => {
    element.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();

    expect(directiveInstance.isOpen()).toBe(true);
    expect(element.classList.contains('is-open')).toBe(true);
  });

  it('should set isOpen to false and remove "is-open" class on mouseleave', () => {
    // First trigger mouseenter to open
    element.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();

    // Trigger mouseleave to close
    element.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();

    expect(directiveInstance.isOpen()).toBe(false);
    expect(element.classList.contains('is-open')).toBe(false);
  });
});
