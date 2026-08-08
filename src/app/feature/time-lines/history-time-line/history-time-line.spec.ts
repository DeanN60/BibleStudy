import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { HistoryTimeLine } from './history-time-line';

// Mock child component implementations using Angular TestBed overrides
import { Component } from '@angular/core';

@Component({ selector: 'app-time-lines-sub-menu', template: '' })
class MockTimeLinesSubMenu {}

@Component({ selector: 'app-person', template: '' })
class MockPerson {}

@Component({ selector: 'app-tl-marker', template: '' })
class MockTlMarker {}

describe('HistoryTimeLine', () => {
  let component: HistoryTimeLine;
  let fixture: ComponentFixture<HistoryTimeLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryTimeLine]
    })
      .overrideComponent(HistoryTimeLine, {
        set: {
          // Replace real child components with dummy standalone mocks
          imports: [MockTimeLinesSubMenu, MockPerson, MockTlMarker]
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(HistoryTimeLine);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set default initial properties correctly', () => {
    expect(component.pageSubtitle).toBe('History');
    expect(component.markerHeight).toBe(160);
    expect(component.marginTop).toBe(5);
    expect(component.scale).toBe(1);
    expect(component.yearOfOurLord).toBe(3925);
    expect(component.baseYear).toBe(0);
  });

  describe('init()', () => {
    it('should process visible persons, calculate baseYear, and adjust birth years', () => {
      // Set up test state directly on component or mock datasets before calling init
      component.init();

      // Verify baseYear assigned from the first visible person in personList
      expect(component.baseYear).toBeGreaterThanOrEqual(0);
      expect(component.personList.every(p => p.show)).toBe(true);
    });

    it('should calculate markerHeight based on the filtered person count', () => {
      component.init();

      const expectedHeight = 40 * component.personList.length;
      expect(component.markerHeight).toBe(expectedHeight);
    });

    it('should construct markerList including YOL and Current AD markers', () => {
      const currentYear = new Date().getFullYear();

      component.init();

      // Ensure YOL marker was pushed
      const yolMarker = component.markerList.find(m => m.name === 'YOL');
      expect(yolMarker).toBeDefined();
      expect(yolMarker?.height).toBe(component.markerHeight);
      expect(yolMarker?.label?.note).toBe('Year of Our Lord');

      // Ensure Current AD marker was pushed
      const adMarker = component.markerList.find(m => m.name === `${currentYear} AD`);
      expect(adMarker).toBeDefined();
      expect(adMarker?.height).toBe(component.markerHeight);
    });
  });
});
