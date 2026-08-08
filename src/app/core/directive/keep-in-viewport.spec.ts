import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, beforeEach, it, expect, vi } from 'vitest';
import {KeepInViewport} from '@core/directive/keep-in-viewport';

@Component({
  standalone: true,
  imports: [KeepInViewport],
  template: `<div appKeepInViewport style="position: absolute;">Test Element</div>`
})
class TestHostComponent {}

describe('KeepInViewport Directive', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let elementRef: ElementRef<HTMLElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, KeepInViewport],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    const directiveEl = fixture.debugElement.query(By.directive(KeepInViewport));
    elementRef = directiveEl.injector.get(ElementRef);

    // Mock initial layout properties on the element
    Object.defineProperty(elementRef.nativeElement, 'offsetLeft', { value: 100, writable: true });
    Object.defineProperty(elementRef.nativeElement, 'offsetTop', { value: 100, writable: true });

    // Mock window viewport dimensions
    vi.stubGlobal('innerWidth', 1000);
    vi.stubGlobal('innerHeight', 800);
  });

  const triggerMouseEnter = () => {
    const el = fixture.debugElement.query(By.directive(KeepInViewport));
    el.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
  };

  it('should adjust position when overflowing the right boundary', () => {
    // rect.right = 1050 (viewportWidth = 1000 -> overflowRight = 50)
    // expected left = 100 - (50 + 10) = 40
    vi.spyOn(elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({
      right: 1050,
      left: 850,
      bottom: 500,
      top: 100,
      width: 200,
      height: 100,
      x: 850,
      y: 100,
      toJSON: () => {}
    });

    triggerMouseEnter();

    expect(elementRef.nativeElement.style.left).toBe('40px');
    expect(elementRef.nativeElement.style.top).toBe('100px');
    expect(elementRef.nativeElement.style.width).toBe('200px');
  });

  it('should adjust position when overflowing the left boundary', () => {
    // rect.left = -30 (abs(-30) = 30)
    // expected left = 100 + (30 + 40) = 170
    vi.spyOn(elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({
      right: 170,
      left: -30,
      bottom: 200,
      top: 100,
      width: 200,
      height: 100,
      x: -30,
      y: 100,
      toJSON: () => {}
    });

    triggerMouseEnter();

    expect(elementRef.nativeElement.style.left).toBe('170px');
  });

  it('should adjust position when overflowing the bottom boundary', () => {
    // rect.bottom = 850 (viewportHeight = 800 -> overflowBottom = 50)
    // expected top = 100 - (50 + 20) = 30
    vi.spyOn(elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({
      right: 500,
      left: 100,
      bottom: 850,
      top: 750,
      width: 200,
      height: 100,
      x: 100,
      y: 750,
      toJSON: () => {}
    });

    triggerMouseEnter();

    expect(elementRef.nativeElement.style.top).toBe('30px');
  });

  it('should adjust position when overflowing the top boundary', () => {
    // rect.top = -20 (abs(-20) = 20)
    // expected top = 100 + 20 = 120
    vi.spyOn(elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({
      right: 500,
      left: 100,
      bottom: 80,
      top: -20,
      width: 200,
      height: 100,
      x: 100,
      y: -20,
      toJSON: () => {}
    });

    triggerMouseEnter();

    expect(elementRef.nativeElement.style.top).toBe('120px');
  });

  it('should not alter offset if element is completely within viewport bounds', () => {
    vi.spyOn(elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({
      right: 500,
      left: 100,
      bottom: 500,
      top: 100,
      width: 200,
      height: 100,
      x: 100,
      y: 100,
      toJSON: () => {}
    });

    triggerMouseEnter();

    expect(elementRef.nativeElement.style.left).toBe('100px');
    expect(elementRef.nativeElement.style.top).toBe('100px');
    expect(elementRef.nativeElement.style.width).toBe('200px');
  });
});
