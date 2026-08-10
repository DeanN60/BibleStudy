import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SheepAndGoats} from './sheep-and-goats';
import {TheologySubMenu} from '../../theology-sub-menu/theology-sub-menu';
import {RightSubMenu} from '../right-sub-menu/right-sub-menu';
import {Book} from '@core/book';
import {beforeEach, describe, expect, it} from 'vitest';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {MockTheologySubMenu} from '@mock/mock-theology-sub-menu';
import {MockBook} from '@mock/mock-book';
import {MockRightSubMenu} from '@mock/mock-right-sub-menu';

describe('SheepAndGoats Component', () => {
  let component: SheepAndGoats;
  let fixture: ComponentFixture<SheepAndGoats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SheepAndGoats
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Override imported child components with mock components
      .overrideComponent(SheepAndGoats, {
        remove: {imports: [TheologySubMenu, RightSubMenu, Book]},
        add: {imports: [MockTheologySubMenu, MockRightSubMenu, MockBook]},
      })
      .compileComponents();

    fixture = TestBed.createComponent(SheepAndGoats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct page subtitle', () => {
    expect(component.pageSubtitle).toBe('Eschatology - Sheep And Goats');
  });

  it('should expose scripture properties', () => {
    expect(component['matt_25_31_33']).toBeDefined();
    expect(component['matt_25_34_40']).toBeDefined();
    expect(component['matt_25_41_45']).toBeDefined();
  });
});
