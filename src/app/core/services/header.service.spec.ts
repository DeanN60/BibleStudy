import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { HeaderService } from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize subtitle as an empty string', () => {
    expect(service.subtitle()).toBe('');
  });

  it('should update subtitle when setSubtitle is called', () => {
    const testSubtitle = 'Dashboard Overview';
    service.setSubtitle(testSubtitle);

    expect(service.subtitle()).toBe(testSubtitle);
  });

  it('should clear subtitle when clearSubtitle is called', () => {
    service.setSubtitle('Temporary Subtitle');
    expect(service.subtitle()).toBe('Temporary Subtitle');

    service.clearSubtitle();
    expect(service.subtitle()).toBe('');
  });
});
