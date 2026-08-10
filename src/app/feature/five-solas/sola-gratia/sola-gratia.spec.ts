import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {SolaGratia} from './sola-gratia';
import {Book} from '@core/book';
import {FiveSolasSubMenu} from '../five-solas-sub-menu/five-solas-sub-menu';
import {MockFiveSolasSubMenu} from '@mock/mock-five-solas-sub-menu';
import {MockBook} from '@mock/mock-book';
import {titus_3_4_5} from '@books/Titus/titus_3';
import {eph_2_8_9} from '@books/Ephesians/eph_2';

describe('SolaGratia', () => {
  let component: SolaGratia;
  let fixture: ComponentFixture<SolaGratia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolaGratia],
    })
      // Override imports to isolate SolaGratia from child components during unit testing
      .overrideComponent(SolaGratia, {
        remove: {imports: [FiveSolasSubMenu, Book]},
        add: {imports: [MockFiveSolasSubMenu, MockBook]},
      })
      .compileComponents();

    fixture = TestBed.createComponent(SolaGratia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the pageSubtitle correctly', () => {
    expect(component.pageSubtitle).toBe('Five Sola - Sola Gratia');
  });

  it('should assign scripture references correctly', () => {
    expect(component['titus_3_4_5']).toEqual(titus_3_4_5);
    expect(component['eph_2_8_9']).toEqual(eph_2_8_9);
  });
});
