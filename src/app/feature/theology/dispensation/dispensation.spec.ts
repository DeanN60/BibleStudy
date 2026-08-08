import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ChangeDetectionStrategy} from '@angular/core';
import {beforeEach, describe, expect, it} from 'vitest';
import {Dispensation} from './dispensation';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing'; // Adjust import path as needed

describe('Dispensation', () => {
  let component: Dispensation;
  let fixture: ComponentFixture<Dispensation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Dispensation
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Dispensation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle to "Dispensation"', () => {
    expect(component.pageSubtitle).toBe('Dispensation');
  });

  it('should initialize dispensationalismDefinition correctly', () => {
    expect(component.dispensationalismDefinition).toEqual({
      source: 'Merriam-Webster',
      term: 'Dispensationalism',
      type: 'noun',
      definitions: [
        {
          def: "adherence to or advocacy of a system of interpreting history in terms of a series of God's dispensations"
        }
      ]
    });
  });

  it('should expose protected scriptural and dispensation references', () => {
    // Asserting protected properties are defined on the component instance
    expect((component as any).iCor_9_17).toBeDefined();
    expect((component as any).eph_1_10).toBeDefined();
    expect((component as any).eph_3_2).toBeDefined();
    expect((component as any).col_1_25).toBeDefined();
    expect((component as any).dispensation_1_7).toBeDefined();
    expect((component as any).dispensation_1_18).toBeDefined();
    expect((component as any).dispensation_1_19).toBeDefined();
  });
});
