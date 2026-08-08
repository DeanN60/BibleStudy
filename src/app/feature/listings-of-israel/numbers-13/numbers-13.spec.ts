import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, input} from '@angular/core';
import {beforeEach, describe, expect, it} from 'vitest';
import {Numbers13} from './numbers-13';
import {LoiSubMenu} from '../loi-sub-menu/loi-sub-menu';
import {Tribe} from '@core/tribe/tribe';
import {provideRouter} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

// Mock child components if needed to isolate the test
@Component({selector: 'app-loi-sub-menu', standalone: true, template: ''})
class MockLoiSubMenu {
}

@Component({selector: 'app-tribe', standalone: true, template: ''})
class MockTribe {
  name = input<string>();
  showStandard = input<boolean>(false);
}

describe('Numbers13', () => {
  let component: Numbers13;
  let fixture: ComponentFixture<Numbers13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Numbers13
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      // Override child components with mocks if you want unit isolation
      .overrideComponent(Numbers13, {
        remove: {imports: [LoiSubMenu, Tribe]},
        add: {imports: [MockLoiSubMenu, MockTribe]},
      }).compileComponents();

    fixture = TestBed.createComponent(Numbers13);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct page subtitle set', () => {
    expect(component.pageSubtitle).toBe('Numbers 13 Listing');
  });
});
