import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LifeOfJesus} from './life-of-jesus';
import {beforeEach, describe, expect, it} from 'vitest';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {MockTimeLinesSubMenu} from '@mock/mock-time-lines-sub-menu';
import {MockPerson} from '@mock/mock-person';
import {MockTlMarker} from '@mock/mock-tl-marker';

describe('LifeOfJesus', () => {
  let component: LifeOfJesus;
  let fixture: ComponentFixture<LifeOfJesus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LifeOfJesus
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Mock child components if needed to isolate the test scope:
      .overrideComponent(LifeOfJesus, {
        set: {
          // Replace real child components with dummy standalone mocks
          imports: [MockTimeLinesSubMenu, MockPerson, MockTlMarker]
        }
      }).compileComponents();

    fixture = TestBed.createComponent(LifeOfJesus);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set pageSubtitle to "Life of Jesus"', () => {
    expect(component.pageSubtitle).toBe('Life of Jesus');
  });

  it('should initialize personList and markerList correctly on init()', () => {
    // Before lifecycle hook runs
    expect(component.personList).toBeUndefined();
    expect(component.markerList).toBeUndefined();

    // Trigger init()
    component.init();

    // Assert personList initialization
    expect(component.personList).toBeDefined();
    expect(component.personList?.length).toBe(1);
    expect(component.personList?.[0]).toEqual({
      name: 'Jesus',
      birthYear: 0,
      age: 33,
      scale: 50
    });

    // Assert markerList initialization
    expect(component.markerList).toBeDefined();
    expect(component.markerList?.length).toBe(5);

    const scale = component.scale;
    const height = component.markerHeight;

    expect(component.markerList).toEqual([
      {name: '12 years', eventYear: 12 * scale, height, label: {left: -2.1, top: -4.5, labelColor: 'white'}},
      {name: 'Start Ministry', eventYear: 30 * scale, height, label: {left: -3.5, top: -5.5, labelColor: 'white'}},
      {name: 'Crucifixion', eventYear: 33 * scale, height, label: {left: -2.8, top: -5, labelColor: 'red'}},
      {name: 'Ascension', eventYear: 33.3 * scale, height, label: {left: -2.9, top: -5, labelColor: 'lightgreen'}},
      {name: 'Pentecost', eventYear: 33.4 * scale, height, label: {left: -2.3, top: -5, labelColor: 'lightgreen'}}
    ]);
  });
});
