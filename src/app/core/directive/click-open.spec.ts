import { Component, signal } from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, beforeEach, it, expect, vi } from 'vitest';
import {ClickOpen} from '@core/directive/click-open';

// Test host component to test directive binding & two-way model binding
@Component({
  standalone: true,
  imports: [ClickOpen],
  template: `<button [appClickOpen]="isOpen()" (appClickOpenChange)="isOpen.set($event)">Toggle</button>`,
})
class TestHostComponent {
  isOpen = signal(false);
}

describe('ClickOpen Directive', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let buttonEl: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, ClickOpen],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
    buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('should initialize with default class state based on input', () => {
    expect(buttonEl.classList.contains('is-open')).toBe(false);
  });

  it('should update class when input model changes from host', () => {
    hostComponent.isOpen.set(true);
    fixture.detectChanges();

    expect(buttonEl.classList.contains('is-open')).toBe(true);
  });

  it('should toggle state and update host signal on click', () => {
    buttonEl.click();
    fixture.detectChanges();

    expect(hostComponent.isOpen()).toBe(true);
    expect(buttonEl.classList.contains('is-open')).toBe(true);

    buttonEl.click();
    fixture.detectChanges();

    expect(hostComponent.isOpen()).toBe(false);
    expect(buttonEl.classList.contains('is-open')).toBe(false);
  });

  it('should prevent default event action on click', () => {
    const event = new MouseEvent('click', { cancelable: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    buttonEl.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
